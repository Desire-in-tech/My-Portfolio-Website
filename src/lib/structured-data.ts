import type { Project } from '../data/projects';
import { SITE_URL } from './site';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: new URL(item.path, SITE_URL).toString() } : {}),
    })),
  };
}

const programmingLanguages = new Set([
  'c', 'c++', 'c#', 'go', 'java', 'javascript', 'kotlin', 'php',
  'python', 'r', 'ruby', 'rust', 'sql', 'swift', 'typescript',
]);

export function createProjectSchema(project: Project): Record<string, unknown> {
  const languages = project.technologies.filter((technology) =>
    programmingLanguages.has(technology.trim().toLowerCase()),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    codeRepository: project.github,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.image,
    author: {
      '@type': 'Person',
      name: 'Desire Eyotaru',
      url: SITE_URL,
    },
    keywords: project.technologies,
    ...(languages.length ? { programmingLanguage: languages } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/projects/${project.slug}`,
    },
  };
}
