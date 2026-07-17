import { BlogPost } from '../data/blogPosts';
import { Project } from '../data/projects';

const normalize = (s: string): string => s.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * Score how related a blog post is to a project by comparing tags, keywords,
 * and project technologies. Returns 0 for the post itself.
 */
function scorePostToProject(post: BlogPost, project: Project): number {
  let score = 0;
  const postTokens = new Set([
    ...post.tags.map(normalize),
    ...post.targetKeywords.map(normalize),
  ]);
  for (const tech of project.technologies) {
    const t = normalize(tech);
    for (const token of postTokens) {
      if (t.includes(token) || token.includes(t)) score += 2;
    }
  }
  if (normalize(post.category) === normalize(project.category)) score += 1;
  return score;
}

/** Score post-to-post similarity via shared tags and keywords. */
function scorePostToPost(a: BlogPost, b: BlogPost): number {
  let score = 0;
  const aTokens = new Set([
    ...a.tags.map(normalize),
    ...a.targetKeywords.map(normalize),
  ]);
  for (const token of [...b.tags, ...b.targetKeywords]) {
    if (aTokens.has(normalize(token))) score += 2;
  }
  if (a.category === b.category) score += 1;
  return score;
}

export function getRelatedArticles(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ post: p, score: scorePostToPost(post, p) }))
    .sort((a, b) => b.score - a.score || new Date(b.post.publishDate).getTime() - new Date(a.post.publishDate).getTime())
    .slice(0, limit)
    .map((x) => x.post);
}

export function getRelatedProjectsForPost(post: BlogPost, all: Project[], limit = 1): Project[] {
  return all
    .map((p) => ({ project: p, score: scorePostToProject(post, p) }))
    .sort((a, b) => b.score - a.score)
    .filter((x) => x.score > 0)
    .slice(0, limit)
    .map((x) => x.project);
}

export function getRelatedArticlesForProject(project: Project, all: BlogPost[], limit = 3): BlogPost[] {
  return all
    .map((p) => ({ post: p, score: scorePostToProject(p, project) }))
    .sort((a, b) => b.score - a.score || new Date(b.post.publishDate).getTime() - new Date(a.post.publishDate).getTime())
    .filter((x) => x.score > 0)
    .slice(0, limit)
    .map((x) => x.post);
}
