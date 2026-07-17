export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Articles on ML models, training, evaluation, and deployment.',
  },
  {
    name: 'Backend',
    slug: 'backend',
    description: 'API design, Django, FastAPI, databases, and server architecture.',
  },
  {
    name: 'Data Science',
    slug: 'data-science',
    description: 'Data analysis, visualization, and practical data workflows.',
  },
  {
    name: 'Career',
    slug: 'career',
    description: 'Notes on learning, job hunting, and growing as an engineer.',
  },
];

export const getBlogCategoryBySlug = (slug: string): BlogCategory | undefined =>
  blogCategories.find((c) => c.slug === slug);

export default blogCategories;
