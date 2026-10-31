import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

export interface Heading {
  id: string;
  level: number;
  text: string;
}

export interface MarkdownSections {
  introHtml: string;
  contentHtml: string;
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-') || 'section'
  );
}

function getHeadingText(token: {
  children?: Array<{
    type: string;
    content?: string;
    attrGet?: (name: string) => string | number | null;
  }> | null;
}): string {
  return (token.children ?? [])
    .map((child) => {
      if (child.type === 'image') return child.attrGet?.('alt') ?? child.content ?? '';
      if (child.type === 'text' || child.type === 'code_inline') return child.content ?? '';
      if (child.type === 'softbreak' || child.type === 'hardbreak') return ' ';
      return '';
    })
    .join('')
    .trim();
}

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);

const languageAliases: Record<string, string> = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  html: 'xml',
  sh: 'bash',
  shell: 'bash',
};

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
  highlight(code, language) {
    const requestedLanguage = (language || '').toLowerCase().trim();
    const normalizedLanguage = languageAliases[requestedLanguage] ?? requestedLanguage;

    if (normalizedLanguage && hljs.getLanguage(normalizedLanguage)) {
      try {
        return hljs.highlight(code, { language: normalizedLanguage }).value;
      } catch {
        // Fall through to MarkdownIt's escaped, unhighlighted code output.
      }
    }

    return '';
  },
});

markdown.core.ruler.push('blog_heading_ids', (state) => {
  const seen = new Map<string, number>();

  for (let i = 0; i < state.tokens.length; i += 1) {
    const token = state.tokens[i];
    if (token.type !== 'heading_open') continue;

    const inlineToken = state.tokens[i + 1];
    const text = inlineToken ? getHeadingText(inlineToken) : '';
    const baseId = slugify(text);
    const count = seen.get(baseId) ?? 0;
    seen.set(baseId, count + 1);
    token.attrSet('id', count > 0 ? `${baseId}-${count}` : baseId);
  }
});

markdown.renderer.rules.link_open = (tokens, index, options, _env, self) => {
  const token = tokens[index];
  const href = String(token.attrGet('href') ?? '');

  if (/^https?:\/\//i.test(href)) {
    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
  }

  return self.renderToken(tokens, index, options);
};

markdown.renderer.rules.image = (tokens, index, options, _env, self) => {
  const token = tokens[index];
  token.attrSet('loading', 'lazy');
  token.attrSet('decoding', 'async');

  const image = self.renderToken(tokens, index, options);
  const alt = String(token.attrGet('alt') ?? '');

  return `<figure class="blog-image">${image}${
    alt ? `<figcaption>${markdown.utils.escapeHtml(alt)}</figcaption>` : ''
  }</figure>`;
};

function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ['target', 'rel', 'loading', 'decoding', 'class', 'id'],
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button'],
  });
}

function parseMarkdown(content: string) {
  return markdown.parse(content, {});
}

export function extractHeadings(content: string): Heading[] {
  const tokens = parseMarkdown(content);
  const headings: Heading[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'heading_open') continue;

    const level = Number(token.tag.slice(1));
    if (level !== 2 && level !== 3) continue;

    const inlineToken = tokens[i + 1];
    const text = inlineToken ? getHeadingText(inlineToken) : '';
    const id = String(token.attrGet('id') ?? '');

    if (id) headings.push({ id, level, text });
  }

  return headings;
}

export function renderMarkdownSections(content: string): MarkdownSections {
  const tokens = parseMarkdown(content);
  let splitIndex = tokens.findIndex(
    (token) => token.type === 'heading_open' && token.tag === 'h2'
  );

  if (splitIndex === -1) {
    splitIndex = tokens.findIndex(
      (token) => token.type === 'heading_open' && token.tag === 'h3'
    );
  }

  if (splitIndex === -1) {
    return {
      introHtml: sanitizeHtml(markdown.renderer.render(tokens, markdown.options, {})),
      contentHtml: '',
    };
  }

  const introTokens = tokens.slice(0, splitIndex);
  const contentTokens = tokens.slice(splitIndex);

  return {
    introHtml: sanitizeHtml(markdown.renderer.render(introTokens, markdown.options, {})),
    contentHtml: sanitizeHtml(markdown.renderer.render(contentTokens, markdown.options, {})),
  };
}

export function renderMarkdown(content: string): string {
  const sections = renderMarkdownSections(content);
  return sections.introHtml + sections.contentHtml;
}

const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function getReadingTime(content: string): string {
  return `${calculateReadingTime(content)} min read`;
}

export function getExcerpt(post: { excerpt?: string; content: string }): string {
  if (post.excerpt && post.excerpt.trim()) return post.excerpt;

  const firstParagraph = post.content
    .split('\n')
    .map((line) => line.trim())
    .find(
      (line) =>
        line &&
        !line.startsWith('#') &&
        !line.startsWith('-') &&
        !line.startsWith('*') &&
        !/^\d+\./.test(line)
    );

  if (!firstParagraph) return '';
  return firstParagraph.length > 180 ? firstParagraph.slice(0, 177) + '...' : firstParagraph;
}

export function formatDate(dateStr: string): string {
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);

  // Date-only values are calendar dates. Parsing them with new Date("YYYY-MM-DD")
  // treats them as UTC midnight and can shift the displayed day west of UTC.
  if (dateOnly) {
    const year = Number(dateOnly[1]);
    const month = Number(dateOnly[2]);
    const day = Number(dateOnly[3]);
    const local = new Date(year, month - 1, day);

    if (
      local.getFullYear() !== year ||
      local.getMonth() !== month - 1 ||
      local.getDate() !== day
    ) {
      return dateStr;
    }

    return local.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
