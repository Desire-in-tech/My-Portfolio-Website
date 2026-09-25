declare module 'virtual:blog-details' {
  export interface BlogPostDetails {
    id: string;
    title: string;
    slug: string;
    category: string;
    publishDate: string;
    updatedDate?: string;
    author: string;
    readingTime: string;
    excerpt?: string;
    /**
     * Build-time `getExcerpt(post)` for the full article. Raw `excerpt` is unchanged.
     * Use this for cards, search, and meta fallbacks. It matches `excerpt` whenever
     * that field is non-blank, and uses the article body only when excerpt is empty.
     */
    displayExcerpt: string;
    featuredImage: string;
    imageAlt: string;
    metaTitle: string;
    metaDescription: string;
    targetKeywords: string[];
    tags: string[];
    featured: boolean;
    relatedProjectSlug?: string;
  }

  export const blogPostDetails: BlogPostDetails[];

  export function getBlogPostDetailsBySlug(slug: string): BlogPostDetails | undefined;

  export function getFeaturedPostDetails(): BlogPostDetails[];

  export function getSortedPostDetails(): BlogPostDetails[];

  export const loadBlogContent: Record<string, () => Promise<{ default: string }>>;
}
