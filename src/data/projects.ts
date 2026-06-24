export type ProjectStatus = 'Deployed' | 'Project';
export type ProjectCategory = 'Machine Learning' | 'Backend';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'telecom-churn-prediction',
    title: 'Telecom Churn Prediction',
    description:
      'Full-stack churn prediction platform using React, Django REST Framework, XGBoost, and SHAP. Enables telecom providers to identify at-risk customers, understand churn drivers, and support data-driven retention strategies.',
    technologies: ['Python', 'XGBoost', 'SHAP', 'React', 'Django REST', 'PostgreSQL'],
    github: 'https://github.com/Desire-in-tech/Customer-Churn-Prediction',
    demo: 'https://customer-churn-prediction-1-k408.onrender.com',
    image: '/images/customer_churn.png',
    category: 'Machine Learning',
    status: 'Deployed',
    featured: true,
  },
  {
    id: '2',
    slug: 'consumer-finance-segmentation',
    title: 'Consumer Finance Segmentation',
    description:
      'ML-powered household segmentation dashboard using K-Means clustering and PCA to segment U.S. households from the 2019 Survey of Consumer Finances dataset, with an interactive Dash web application.',
    technologies: ['Python', 'Scikit-Learn', 'K-Means', 'PCA', 'Dash', 'Plotly'],
    github: 'https://github.com/Desire-in-tech/Customer-Segmentation',
    demo: 'https://customer-segmentation-ms4d.onrender.com',
    image: '/images/segmentation.png',
    category: 'Machine Learning',
    status: 'Deployed',
    featured: true,
  },
  {
    id: '3',
    slug: 'stock-volatility-api',
    title: 'Stock Volatility API',
    description:
      'FastAPI service for forecasting stock volatility with GARCH models. RESTful API with comprehensive documentation and financial time series analysis.',
    technologies: ['Python', 'FastAPI', 'GARCH', 'Pandas', 'NumPy', 'Docker'],
    github: 'https://github.com/Desire-in-tech/stock-market-volatility-forecasting',
    demo: 'https://stock-market-volatility-forecasting.onrender.com',
    image: '/images/stock_market.png',
    category: 'Backend',
    status: 'Deployed',
    featured: true,
  },
  {
    id: '4',
    slug: 'sentiment-analysis',
    title: 'NLP Sentiment Analysis',
    description:
      'Sentiment analysis solution using NLP and machine learning to classify customer reviews as positive or negative, leveraging TF-IDF feature engineering, traditional ML models, and a BERT transformer for performance comparison.',
    technologies: ['Python', 'BERT', 'Transformers', 'Scikit-Learn', 'TF-IDF', 'NLTK'],
    github: 'https://github.com/Desire-in-tech/NLP-Sentiment-Analysis',
    image: '/images/NLP_sentiment.png',
    category: 'Machine Learning',
    status: 'Project',
    featured: false,
  },
  {
    id: '5',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    description:
      'Fraud detection system using imbalanced-learning techniques and explainable AI for financial security.',
    technologies: ['Python', 'XGBoost', 'SMOTE', 'SHAP', 'Scikit-Learn'],
    github: 'https://github.com/Desire-in-tech/Fraud-Detection-Model',
    image: '/images/Fraud_detection.png',
    category: 'Machine Learning',
    status: 'Project',
    featured: false,
  },
  {
    id: '6',
    slug: 'hospital-management-api',
    title: 'Hospital Management API',
    description:
      'Secure healthcare management REST API with authentication and role-based access control for medical records.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Desire-in-tech/Hospital-Management-System-API',
    image: '/images/HMSystem_API.png',
    category: 'Backend',
    status: 'Project',
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
