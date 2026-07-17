// Blog posts are defined here. Add a new object to this array to publish a new
// article — no component or routing changes required. `relatedProjectSlug`
// optionally links a post to a portfolio project (see src/data/projects.ts).

import { images } from './images';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  readingTime: string;
  excerpt: string;
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

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Customer Segmentation with K-Means Clustering and PCA',
    slug: 'customer-segmentation-machine-learning',
    category: 'Machine Learning',
    publishDate: '2025-01-15',
    updatedDate: '2025-02-02',
    author: 'Desire',
    readingTime: '8 min read',
    excerpt:
      'How I used K-Means clustering and PCA to segment U.S. households from the Survey of Consumer Finances, and built an interactive Dash dashboard to explore the clusters.',
    featuredImage: images.segmentation,
    imageAlt: 'Customer segmentation dashboard with PCA scatter plot',
    metaTitle: 'Customer Segmentation with K-Means and PCA | Desire Eyotaru',
    metaDescription:
      'A practical walkthrough of K-Means clustering and PCA for household segmentation using the Survey of Consumer Finances, with an interactive Dash dashboard.',
    targetKeywords: ['customer segmentation', 'k-means clustering', 'PCA', 'scikit-learn'],
    tags: ['clustering', 'unsupervised', 'dash', 'plotly'],
    content: `## Why segmentation matters

Businesses want to understand who their customers are so they can tailor products, marketing, and risk decisions. Segmentation turns a noisy customer base into a handful of actionable profiles.

## The dataset

I used the 2019 Survey of Consumer Finances, which captures household financial and demographic variables across the United States. The raw data is wide and messy, so the first step is selecting informative features and scaling them.

## K-Means clustering

K-Means partitions data into K clusters by minimizing within-cluster variance. The key decisions are:

1. Choosing K — I used the elbow method and silhouette scores.
2. Scaling features — K-Means is distance-based, so StandardScaler is mandatory.
3. Interpreting clusters — I inspected cluster centroids to label each segment.

## Reducing dimensions with PCA

To visualize the clusters in 2D, I applied PCA and kept the first two principal components. PCA also helped reveal which variables carry the most variance.

## Building the Dash dashboard

The final app lets users:

- Adjust the number of clusters
- View the PCA scatter colored by segment
- Inspect cluster profiles side-by-side

## Takeaways

Clustering is as much about interpretation as it is about the algorithm. The model is only useful once you can describe each segment in business terms.`,
    featured: true,
    relatedProjectSlug: 'consumer-finance-segmentation',
  },
  {
    id: '2',
    title: 'Predicting Customer Churn with XGBoost and SHAP',
    slug: 'predicting-customer-churn-xgboost-shap',
    category: 'Machine Learning',
    publishDate: '2025-01-22',
    author: 'Desire',
    readingTime: '10 min read',
    excerpt:
      'Building a churn prediction platform with XGBoost and explaining predictions with SHAP, so retention teams can act on the drivers of churn — not just the score.',
    featuredImage: images.customerChurn,
    imageAlt: 'Churn prediction dashboard with SHAP feature importance',
    metaTitle: 'Customer Churn Prediction with XGBoost and SHAP | Desire Eyotaru',
    metaDescription:
      'A full-stack approach to telecom churn prediction using XGBoost, SHAP explainability, Django REST, and a React frontend.',
    targetKeywords: ['customer churn', 'xgboost', 'shap', 'explainable ai'],
    tags: ['classification', 'feature importance', 'django', 'react'],
    content: `## The churn problem

Telecom providers lose revenue when customers leave. Predicting churn early lets retention teams intervene — but only if they trust the model.

## Feature engineering

I engineered features around tenure, contract type, monthly charges, and service add-ons. Categorical variables were one-hot encoded; numeric features were scaled.

## XGBoost

XGBoost handles tabular data well and gives strong out-of-the-box performance. I tuned learning rate, max depth, and number of estimators using cross-validation.

## Explainability with SHAP

A prediction score alone is not actionable. SHAP values show how each feature pushed a customer toward or away from churn, per individual. This is what retention teams need.

## Full-stack deployment

- **Backend:** Django REST Framework serving predictions
- **Frontend:** React dashboard listing at-risk customers and SHAP drivers
- **Database:** PostgreSQL

## Lessons learned

Explainability is the bridge between a good model and a useful product. SHAP turned a black-box score into something the business could act on.`,
    featured: true,
    relatedProjectSlug: 'telecom-churn-prediction',
  },
  {
    id: '3',
    title: 'Forecasting Stock Volatility with GARCH Models',
    slug: 'forecasting-stock-volatility-garch',
    category: 'Backend',
    publishDate: '2025-02-03',
    author: 'Desire',
    readingTime: '7 min read',
    excerpt:
      'A FastAPI service that forecasts stock volatility using GARCH models, with clean REST endpoints and financial time-series analysis.',
    featuredImage: images.stockMarket,
    imageAlt: 'Stock volatility forecasting chart with GARCH confidence bands',
    metaTitle: 'Stock Volatility Forecasting with GARCH and FastAPI | Desire Eyotaru',
    metaDescription:
      'How I built a FastAPI service for forecasting stock volatility using GARCH models, with RESTful endpoints and Docker deployment.',
    targetKeywords: ['garch', 'volatility forecasting', 'fastapi', 'time series'],
    tags: ['finance', 'rest api', 'docker', 'pandas'],
    content: `## Why volatility, not price

Predicting price direction is hard. Predicting volatility — the size of future swings — is more tractable and still useful for risk management.

## GARCH basics

GARCH models conditional variance as a function of past squared returns and past variance. It captures volatility clustering: turbulent periods tend to follow turbulent periods.

## Building the FastAPI service

The service exposes endpoints to:

- Fetch historical prices
- Fit a GARCH(1,1) model
- Return a volatility forecast with confidence intervals

FastAPI's auto-generated docs made the API easy to consume and test.

## Deployment

I containerized the service with Docker and deployed to Render. Keeping the model fitting server-side avoids shipping weights to the client.

## Takeaways

Financial time series reward careful modeling over brute force. GARCH is a small, interpretable model that performs surprisingly well for short-horizon volatility.`,
    featured: false,
    relatedProjectSlug: 'stock-volatility-api',
  },
  {
    id: '4',
    title: 'Sentiment Analysis: TF-IDF vs BERT',
    slug: 'sentiment-analysis-tfidf-vs-bert',
    category: 'Machine Learning',
    publishDate: '2025-02-12',
    author: 'Desire',
    readingTime: '9 min read',
    excerpt:
      'Comparing a classic TF-IDF + Logistic Regression pipeline against a fine-tuned BERT model for customer review sentiment classification.',
    featuredImage: images.nlpSentiment,
    imageAlt: 'Sentiment analysis comparison chart between TF-IDF and BERT',
    metaTitle: 'TF-IDF vs BERT for Sentiment Analysis | Desire Eyotaru',
    metaDescription:
      'A practical comparison of TF-IDF with logistic regression and a fine-tuned BERT transformer for customer review sentiment classification.',
    targetKeywords: ['sentiment analysis', 'tf-idf', 'bert', 'nlp'],
    tags: ['transformers', 'classification', 'nltk', 'scikit-learn'],
    content: `## Two approaches to text classification

Classic NLP relies on hand-crafted features. Modern NLP uses pretrained transformers. I wanted to see how much the gap matters in practice.

## TF-IDF + Logistic Regression

A bag-of-words TF-IDF representation with logistic regression is fast, interpretable, and needs little data. NLTK handled tokenization and stopword removal.

## Fine-tuning BERT

I fine-tuned a BERT-base model on the same review dataset. Hugging Face's Transformers library made the pipeline straightforward.

## Results

- **TF-IDF + LR:** strong baseline, trains in seconds, easy to interpret.
- **BERT:** higher accuracy, especially on nuanced reviews, but slower and data-hungry.

## When to use which

For a quick prototype or a small dataset, TF-IDF is hard to beat. When you have enough data and need every bit of accuracy, BERT is worth the cost.

## Takeaways

Start simple, measure, then decide whether the transformer is worth the complexity.`,
    featured: false,
    relatedProjectSlug: 'sentiment-analysis',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getFeaturedPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.featured);

export const getBlogPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter((p) => p.category === category);

// Newest first.
export const getSortedPosts = (): BlogPost[] =>
  [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

export default blogPosts;
