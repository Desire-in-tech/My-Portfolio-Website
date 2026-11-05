export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Java'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Django', 'FastAPI', 'Spring Boot', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-Learn', 'XGBoost', 'Pandas', 'NumPy', 'BERT', 'TF-IDF'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Render', 'Microsoft Azure', 'Hugging Face'],
  },
];
