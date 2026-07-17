import { projectImages } from './images';

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
  longDescription?: string;
  features?: string[];
  architecture?: string[];
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
    image: projectImages['telecom-churn-prediction'],
    category: 'Machine Learning',
    status: 'Deployed',
    featured: true,
    longDescription:
      'A full-stack platform that predicts which telecom customers are likely to churn and explains the drivers behind each prediction using SHAP values. The backend trains an XGBoost model and serves predictions through a Django REST API; the React frontend surfaces at-risk customers and the features that pushed them toward churn.',
    features: [
      'XGBoost classifier tuned with cross-validation',
      'SHAP-based per-customer explainability',
      'Django REST Framework API with PostgreSQL',
      'React dashboard listing at-risk customers',
      'Feature importance and individual driver views',
    ],
    architecture: [
      'React frontend (dashboard)',
      'Django REST Framework API',
      'XGBoost model + SHAP explainer',
      'PostgreSQL database',
    ],
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
    image: projectImages['consumer-finance-segmentation'],
    category: 'Machine Learning',
    status: 'Deployed',
    featured: true,
    longDescription:
      'An interactive Dash application that segments U.S. households from the 2019 Survey of Consumer Finances using K-Means clustering, with PCA for 2D visualization. Users can adjust the number of clusters and inspect segment profiles side-by-side.',
    features: [
      'K-Means clustering with elbow/silhouette selection',
      'PCA-based 2D visualization of segments',
      'Interactive Dash + Plotly dashboard',
      'Cluster profile comparison views',
    ],
    architecture: [
      'Dash web application',
      'Scikit-Learn K-Means + PCA pipeline',
      'Plotly interactive visualizations',
    ],
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
    image: projectImages['stock-volatility-api'],
    category: 'Backend',
    status: 'Deployed',
    featured: true,
    longDescription:
      'A FastAPI service that forecasts stock volatility using GARCH models. It fetches historical prices, fits a GARCH(1,1) model, and returns a volatility forecast with confidence intervals through clean REST endpoints.',
    features: [
      'GARCH(1,1) volatility forecasting',
      'FastAPI REST endpoints with auto docs',
      'Historical price fetching',
      'Confidence interval forecasts',
      'Dockerized deployment',
    ],
    architecture: [
      'FastAPI service',
      'GARCH model fitting (arch library)',
      'Pandas/NumPy time-series processing',
      'Docker container',
    ],
  },
  {
    id: '4',
    slug: 'sentiment-analysis',
    title: 'NLP Sentiment Analysis',
    description:
      'Sentiment analysis solution using NLP and machine learning to classify customer reviews as positive or negative, leveraging TF-IDF feature engineering, traditional ML models, and a BERT transformer for performance comparison.',
    technologies: ['Python', 'BERT', 'Transformers', 'Scikit-Learn', 'TF-IDF', 'NLTK'],
    github: 'https://github.com/Desire-in-tech/NLP-Sentiment-Analysis',
    image: projectImages['sentiment-analysis'],
    category: 'Machine Learning',
    status: 'Project',
    featured: false,
    longDescription:
      'A sentiment analysis project comparing a classic TF-IDF + Logistic Regression pipeline against a fine-tuned BERT transformer for classifying customer reviews as positive or negative.',
    features: [
      'TF-IDF feature engineering with NLTK preprocessing',
      'Logistic Regression baseline',
      'Fine-tuned BERT transformer comparison',
      'Model evaluation and accuracy benchmarking',
    ],
    architecture: [
      'NLTK preprocessing pipeline',
      'Scikit-Learn TF-IDF + LR model',
      'Hugging Face Transformers BERT model',
    ],
  },
  {
    id: '5',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    description:
      'Fraud detection system using imbalanced-learning techniques and explainable AI for financial security.',
    technologies: ['Python', 'XGBoost', 'SMOTE', 'SHAP', 'Scikit-Learn'],
    github: 'https://github.com/Desire-in-tech/Fraud-Detection-Model',
    image: projectImages['credit-card-fraud-detection'],
    category: 'Machine Learning',
    status: 'Project',
    featured: false,
    longDescription:
      'A fraud detection system that handles severe class imbalance with SMOTE and explains predictions with SHAP, so analysts can understand why a transaction was flagged.',
    features: [
      'SMOTE for class imbalance handling',
      'XGBoost classifier',
      'SHAP-based transaction explainability',
      'Precision/recall optimization for fraud',
    ],
    architecture: [
      'Imbalanced-learn SMOTE pipeline',
      'XGBoost model',
      'SHAP explainer',
    ],
  },
  {
    id: '6',
    slug: 'hospital-management-api',
    title: 'Hospital Management API',
    description:
      'Secure healthcare management REST API with authentication and role-based access control for medical records.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Desire-in-tech/Hospital-Management-System-API',
    image: projectImages['hospital-management-api'],
    category: 'Backend',
    status: 'Project',
    featured: false,
    longDescription:
      'A secure healthcare management REST API built with Django and PostgreSQL, featuring JWT authentication and role-based access control for medical records.',
    features: [
      'JWT authentication',
      'Role-based access control',
      'Medical records CRUD',
      'Django + PostgreSQL backend',
      'Dockerized deployment',
    ],
    architecture: [
      'Django REST API',
      'PostgreSQL database',
      'JWT auth layer',
      'Docker container',
    ],
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
