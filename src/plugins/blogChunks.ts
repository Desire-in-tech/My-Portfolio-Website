import { build } from 'esbuild';
import { stat, rm, readFile, writeFile } from 'fs/promises';
import { mkdtemp } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { pathToFileURL } from 'url';
import type { OutputChunk } from 'rollup';
import type { Plugin, ResolvedConfig } from 'vite';
import { getExcerpt, getReadingTime } from '../lib/blog';

const DETAILS_ID = 'virtual:blog-details';
const CONTENT_PREFIX = 'virtual:blog-content/';
const RESOLVED_DETAILS = `\0${DETAILS_ID}`;

interface SourcePost {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  readingTime?: string;
  excerpt?: string;
  featuredImage: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  tags: string[];
  content: string;
  featured: boolean;
  relatedProjectSlug?: string;
}

interface PostDetails extends Omit<SourcePost, 'content' | 'readingTime'> {
  readingTime: string;
  /**
   * `getExcerpt(post)` for the full source post. Raw `excerpt` is unchanged.
   * Cards, search, and the article meta fallback use this so an empty excerpt
   * still resolves from the article body without shipping that body.
   */
  displayExcerpt: string;
}

function contentSlugFromId(id: string): string | null {
  const marker = CONTENT_PREFIX;
  const index = id.indexOf(marker);
  if (index === -1) return null;
  return id.slice(index + marker.length).split('?')[0].replace(/\0/g, '');
}

function effectiveReadingTime(post: SourcePost): string {
  return post.readingTime ?? getReadingTime(post.content);
}

function toDetails(post: SourcePost): PostDetails {
  const { content: _content, readingTime: _stored, ...rest } = post;
  return {
    ...rest,
    readingTime: effectiveReadingTime(post),
    displayExcerpt: getExcerpt(post),
  };
}

function failValidation(errors: string[]): void {
  if (errors.length === 0) return;
  throw new Error(`blog chunk validation failed:\n${errors.map((error) => `- ${error}`).join('\n')}`);
}

function validateSource(posts: SourcePost[]): void {
  const errors: string[] = [];
  const idCounts = new Map<string, number>();
  const slugCounts = new Map<string, number>();

  posts.forEach((post, index) => {
    if (!post || typeof post !== 'object') {
      errors.push(`post at index ${index} is not an object`);
      return;
    }
    if (typeof post.id !== 'string' || post.id.length === 0) {
      errors.push(`post at index ${index} is missing a string id`);
    } else {
      idCounts.set(post.id, (idCounts.get(post.id) ?? 0) + 1);
    }
    if (typeof post.slug !== 'string' || post.slug.length === 0) {
      errors.push(`post at index ${index} is missing a string slug`);
    } else {
      slugCounts.set(post.slug, (slugCounts.get(post.slug) ?? 0) + 1);
    }
    if (typeof post.content !== 'string') {
      errors.push(`post ${post.slug || index} content is not a string`);
    }
  });

  for (const [id, count] of idCounts) {
    if (count > 1) errors.push(`duplicate blog post id ${JSON.stringify(id)} (${count} posts)`);
  }
  for (const [slug, count] of slugCounts) {
    if (count > 1) errors.push(`duplicate blog post slug ${JSON.stringify(slug)} (${count} posts)`);
  }

  failValidation(errors);
}

function sameStringSet(left: string[], right: string[]): boolean {
  if (left.length !== right.length) return false;
  const rightSet = new Set(right);
  return left.every((value) => rightSet.has(value));
}

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .reduce<Record<string, unknown>>((acc, key) => {
        const entry = (value as Record<string, unknown>)[key];
        if (entry !== undefined) acc[key] = canonical(entry);
        return acc;
      }, {});
  }
  return value;
}

function sameValue(left: unknown, right: unknown): boolean {
  return JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
}

function isDetailsArray(value: unknown): value is PostDetails[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        item &&
        typeof item === 'object' &&
        typeof (item as PostDetails).id === 'string' &&
        typeof (item as PostDetails).slug === 'string' &&
        typeof (item as PostDetails).readingTime === 'string' &&
        !('content' in (item as object))
    )
  );
}

function isLoaderMap(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.values(value).every((entry) => typeof entry === 'function');
}

async function importEmittedDetails(
  code: string
): Promise<{ details: PostDetails[]; loaderSlugs: string[] } | null> {
  const importMatch = code.match(/import\{([^}]+)\}from"\.\/preload-helper-[^"]+\.js";/);
  let executable = code;
  if (importMatch) {
    const spec = importMatch[1];
    const local = (spec.includes(' as ') ? spec.split(' as ').pop() : spec)?.trim();
    if (!local) return null;
    executable = code.replace(importMatch[0], `const ${local}=(load)=>load();`);
  }
  const directory = await mkdtemp(path.join(tmpdir(), 'blog-details-'));
  const outfile = path.join(directory, 'details.mjs');
  try {
    await writeFile(outfile, executable);
    const imported = await import(`${pathToFileURL(outfile).href}?check=${Date.now()}`);
    const details = Object.values(imported).find(isDetailsArray);
    const loaders = Object.values(imported).find(isLoaderMap);
    if (!details || !loaders) return null;
    return { details, loaderSlugs: Object.keys(loaders) };
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

function compareDetails(posts: SourcePost[], details: PostDetails[], loaderSlugs: string[]): string[] {
  const errors: string[] = [];
  const sourceIds = posts.map((post) => post.id);
  const sourceSlugs = posts.map((post) => post.slug);
  const generatedIds = details.map((post) => post.id);
  const generatedSlugs = details.map((post) => post.slug);

  if (details.length !== posts.length) {
    errors.push(`source post count ${posts.length} does not match generated details count ${details.length}`);
  }
  if (new Set(generatedIds).size !== generatedIds.length) errors.push('generated details contain duplicate ids');
  if (new Set(generatedSlugs).size !== generatedSlugs.length) errors.push('generated details contain duplicate slugs');
  if (!sameStringSet(sourceIds, generatedIds)) errors.push('source id set does not match generated details id set');
  if (!sameStringSet(sourceSlugs, generatedSlugs)) errors.push('source slug set does not match generated details slug set');
  if (!sameStringSet(sourceSlugs, loaderSlugs)) {
    errors.push('content loader slugs in the details chunk do not match the source slug set');
  }

  const byId = new Map(details.map((post) => [post.id, post]));
  for (const post of posts) {
    const generated = byId.get(post.id);
    if (!generated) continue;
    const expected = toDetails(post);
    if (generated.readingTime !== expected.readingTime) {
      errors.push(
        `reading time for ${JSON.stringify(post.slug)} is ${JSON.stringify(generated.readingTime)}, expected ${JSON.stringify(expected.readingTime)}`
      );
    }
    if (generated.displayExcerpt !== expected.displayExcerpt) {
      errors.push(`display excerpt for ${JSON.stringify(post.slug)} does not match getExcerpt(post)`);
    }
    if ((generated.excerpt ?? undefined) !== (post.excerpt ?? undefined)) {
      errors.push(`raw excerpt for ${JSON.stringify(post.slug)} was changed`);
    }
    if ('content' in generated) errors.push(`details entry for ${JSON.stringify(post.slug)} includes content`);
    if (!sameValue(generated, expected)) {
      errors.push(`details entry for ${JSON.stringify(post.slug)} does not match the evaluated source`);
    }
  }

  return errors;
}

function renderDetailsModule(posts: SourcePost[]): string {
  const details = posts.map(toDetails);
  const loaders = posts
    .map((post) => `  ${JSON.stringify(post.slug)}: () => import(${JSON.stringify(`${CONTENT_PREFIX}${post.slug}`)})`)
    .join(',\n');

  return `export const blogPostDetails = ${JSON.stringify(details)};

export function getBlogPostDetailsBySlug(slug) {
  return blogPostDetails.find((post) => post.slug === slug);
}

export function getFeaturedPostDetails() {
  return blogPostDetails.filter((post) => post.featured);
}

export function getSortedPostDetails() {
  return [...blogPostDetails].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export const loadBlogContent = {
${loaders}
};
`;
}

function chunkModuleIds(chunk: OutputChunk): string[] {
  if (Array.isArray(chunk.moduleIds) && chunk.moduleIds.length > 0) return chunk.moduleIds;
  return Object.keys(chunk.modules);
}

export function blogChunksPlugin(): Plugin {
  let root = process.cwd();
  let cache: { key: string; posts: SourcePost[] } | null = null;
  let inflight: { key: string; promise: Promise<SourcePost[]> } | null = null;

  async function cacheKey(): Promise<string> {
    const files = ['src/data/blogPosts.ts', 'src/data/images.ts'];
    const stamps = await Promise.all(
      files.map(async (file) => {
        const fileStat = await stat(path.join(root, file));
        return `${file}:${fileStat.mtimeMs}`;
      })
    );
    return stamps.join('|');
  }

  async function loadFromDisk(): Promise<SourcePost[]> {
    const directory = await mkdtemp(path.join(tmpdir(), 'blog-posts-'));
    const outfile = path.join(directory, 'posts.mjs');
    try {
      await build({
        entryPoints: [path.join(root, 'src/data/blogPosts.ts')],
        bundle: true,
        format: 'esm',
        platform: 'node',
        outfile,
        logLevel: 'silent',
      });
      const imported = await import(`${pathToFileURL(outfile).href}?t=${Date.now()}`);
      const posts = imported.blogPosts as SourcePost[];
      if (!Array.isArray(posts)) throw new Error('blogPosts export is not an array');
      validateSource(posts);
      return posts;
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  }

  async function getPosts(): Promise<SourcePost[]> {
    const key = await cacheKey();
    if (cache?.key === key) return cache.posts;
    if (!inflight || inflight.key !== key) {
      inflight = { key, promise: loadFromDisk() };
    }
    const posts = await inflight.promise;
    cache = { key, posts };
    return posts;
  }

  function invalidate(): void {
    cache = null;
    inflight = null;
  }

  return {
    name: 'blog-chunks',
    config() {
      return {
        optimizeDeps: {
          exclude: [DETAILS_ID],
        },
      };
    },
    configResolved(config: ResolvedConfig) {
      root = config.root;
    },
    outputOptions(options) {
      const previous = options.manualChunks;
      options.manualChunks = (id, meta) => {
        if (contentSlugFromId(id)) return `blog-content-${contentSlugFromId(id)}`;
        if (id.includes(DETAILS_ID)) return 'blog-details';
        // Keep Vite's dynamic-import helper out of blog-details. Otherwise the
        // entry chunk imports that helper from the details chunk and the
        // homepage downloads every article's metadata.
        if (id.includes('vite/preload-helper')) return 'preload-helper';
        if (typeof previous === 'function') return previous(id, meta);
        return undefined;
      };
      return options;
    },
    resolveId(source) {
      if (source === DETAILS_ID) return RESOLVED_DETAILS;
      if (source.startsWith(CONTENT_PREFIX)) return `\0${source}`;
      return null;
    },
    async load(id) {
      if (id === RESOLVED_DETAILS) return renderDetailsModule(await getPosts());
      const slug = contentSlugFromId(id);
      if (!slug || !id.startsWith('\0')) return null;
      const posts = await getPosts();
      const post = posts.find((item) => item.slug === slug);
      if (!post) {
        this.error(`No blog post content for slug ${slug}`);
        return '';
      }
      return `export default ${JSON.stringify(post.content)};\n`;
    },
    handleHotUpdate({ file, server }) {
      const normalized = file.replace(/\\/g, '/');
      if (!normalized.endsWith('src/data/blogPosts.ts') && !normalized.endsWith('src/data/images.ts')) return;
      invalidate();
      const modules = [...server.moduleGraph.idToModuleMap.values()].filter((mod) => {
        const moduleId = mod.id ?? '';
        return moduleId.includes(DETAILS_ID) || moduleId.includes(CONTENT_PREFIX);
      });
      for (const mod of modules) server.moduleGraph.invalidateModule(mod);
      return modules;
    },
    async writeBundle(options, bundle) {
      const posts = await getPosts();
      const outDir = options.dir ?? path.resolve(root, 'dist');
      const errors: string[] = [];
      const bySlug = new Map(posts.map((post) => [post.slug, post]));
      const seen = new Map<string, string>();
      let detailsFile = '';

      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk') continue;
        const slugs = chunkModuleIds(output).map(contentSlugFromId).filter((slug): slug is string => Boolean(slug));
        const isDetails = chunkModuleIds(output).some((moduleId) => moduleId.includes(DETAILS_ID)) || output.name === 'blog-details';
        if (isDetails) detailsFile = path.join(outDir, output.fileName);
        if (slugs.length === 0) continue;
        if (slugs.length !== 1) {
          errors.push(`${output.fileName} contains ${slugs.length} article bodies`);
          continue;
        }
        const slug = slugs[0];
        if (seen.has(slug)) errors.push(`slug ${JSON.stringify(slug)} emitted in both ${seen.get(slug)} and ${output.fileName}`);
        seen.set(slug, output.fileName);
        if (isDetails) errors.push(`article ${JSON.stringify(slug)} was emitted inside the details chunk`);

        const source = bySlug.get(slug);
        if (!source) {
          errors.push(`content chunk ${output.fileName} is for unknown slug ${JSON.stringify(slug)}`);
          continue;
        }
        const filePath = path.join(outDir, output.fileName);
        const imported = await import(`${pathToFileURL(filePath).href}?check=${Date.now()}-${encodeURIComponent(slug)}`);
        if (typeof imported.default !== 'string' || imported.default !== source.content) {
          errors.push(`emitted content for ${JSON.stringify(slug)} does not match source`);
        }
      }

      const missing = posts.filter((post) => !seen.has(post.slug)).map((post) => post.slug);
      if (missing.length > 0 || seen.size !== posts.length) {
        errors.push(
          `source has ${posts.length} posts but ${seen.size} content chunks were emitted. Missing: ${missing.join(', ') || 'none'}`
        );
      }

      if (!detailsFile) {
        errors.push('blog details chunk was not emitted');
      } else {
        const detailsCode = await readFile(detailsFile, 'utf8');
        const generated = await importEmittedDetails(detailsCode);
        if (!generated) {
          errors.push('emitted details chunk did not export the post details array');
        } else {
          errors.push(...compareDetails(posts, generated.details, generated.loaderSlugs));
        }
        for (const post of posts) {
          const escapedContent = JSON.stringify(post.content).slice(1, -1);
          if (escapedContent.length > 0 && detailsCode.includes(escapedContent)) {
            errors.push(`details chunk includes the full body of ${JSON.stringify(post.slug)}`);
          }
        }
      }

      if (errors.length) {
        this.error(`blog chunk output validation failed:\n${errors.map((error) => `- ${error}`).join('\n')}`);
      }
    },
  };
}
