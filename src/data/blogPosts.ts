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
    title:
      'Building an End-to-End Customer Churn Prediction System with React, Django, XGBoost, and SHAP',
    slug: 'predicting-customer-churn-xgboost-shap',
    category: 'Machine Learning',
    publishDate: '2025-01-22',
    author: 'Desire',
    readingTime: '25 min read',
    excerpt:
      'Full-stack machine learning application that predicts telecom customer churn using XGBoost and SHAP, with a React frontend and Django REST API for real-time insights.',
    featuredImage:
      'https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316286/customer_churn_iie3zm.png',
    imageAlt:
      'Customer churn prediction application dashboard with XGBoost and SHAP explanations',
    metaTitle:
      'Customer Churn Prediction with XGBoost, SHAP, React and Django | Desire Eyotaru',
    metaDescription:
      'Full-stack machine learning application that predicts telecom customer churn using XGBoost and SHAP, with a React frontend and Django REST API for real-time insights.',
    targetKeywords: [
      'customer churn prediction',
      'xgboost',
      'shap',
      'explainable ai',
      'react',
      'django rest framework',
      'machine learning deployment',
      'feature engineering',
    ],
    tags: [
      'xgboost',
      'shap',
      'react',
      'django rest framework',
      'scikit-learn',
      'pandas',
      'numpy',
      'render',
      'python',
      'machine learning',
    ],
    content: `## Introduction

Customer retention has become one of the biggest challenges across subscription-based industries. Whether it's telecommunications, banking, insurance, SaaS, or streaming platforms, acquiring new customers is significantly more expensive than retaining existing ones. Every customer who leaves represents not only lost recurring revenue but also the marketing and operational costs required to replace them.

This is where customer churn prediction becomes invaluable. By leveraging machine learning, organizations can identify customers who are likely to leave before they actually do, allowing customer success teams to intervene with targeted retention strategies. Rather than reacting after losing valuable customers, businesses can proactively reduce churn, improve customer satisfaction, and maximize lifetime value.

In this project, I built a full-stack Customer Churn Prediction application that combines modern web development with production-ready machine learning. The application uses a React frontend for an intuitive user interface, a Django REST Framework backend for serving predictions, and an XGBoost machine learning model trained on the IBM Telco Customer Churn dataset. To improve transparency and trust, I also integrated SHAP (SHapley Additive exPlanations), enabling users to understand why the model predicts a customer is likely to churn.

Unlike many machine learning projects that stop after model training, this project demonstrates the complete lifecycle of deploying machine learning into a real-world application — from data preprocessing and feature engineering to API development, frontend integration, explainable AI, and cloud deployment.

## Understanding Customer Churn

Before building a predictive model, it's important to understand what customer churn actually means and why businesses invest heavily in reducing it.

Customer churn refers to the percentage of customers who stop using a company's product or service during a given period. In the telecommunications industry, churn occurs when a subscriber cancels their service or switches to a competing provider.

Although losing a single customer may seem insignificant, churn can have a substantial financial impact when scaled across thousands or millions of subscribers. For example, consider a telecom provider with one million customers and an annual churn rate of just 20%. That means approximately 200,000 customers leave every year. Replacing those customers often requires expensive marketing campaigns, promotional discounts, sales commissions, and onboarding costs. Studies consistently show that acquiring a new customer can cost several times more than retaining an existing one.

This makes customer retention one of the highest-return investments a business can make. Rather than treating every customer equally, predictive analytics allows organizations to focus retention efforts on individuals who are genuinely at risk of leaving.

Instead of offering discounts to every customer — which would be both expensive and inefficient — a churn prediction model identifies high-risk customers and recommends targeted interventions such as:

- Personalized retention offers
- Loyalty rewards
- Contract upgrade incentives
- Customer support outreach
- Product recommendations
- Billing assistance
- Early onboarding programs

This data-driven approach significantly improves marketing efficiency while increasing customer lifetime value.

## The Business Problem

Telecommunications companies generate predictable recurring revenue from monthly subscriptions. However, that business model only remains profitable if customers continue renewing their contracts.

Every customer who leaves affects multiple business metrics simultaneously:

- Lost monthly recurring revenue
- Reduced customer lifetime value (CLV)
- Increased customer acquisition costs (CAC)
- Higher marketing expenditure
- Lower profitability
- Reduced market share

Industry estimates suggest that replacing a churned telecom customer can cost between $1,000 and $3,000, depending on acquisition channels, promotional campaigns, and onboarding expenses. When thousands of customers churn annually, the financial impact can reach millions of dollars.

The challenge is that companies often don't know which customers are about to leave until it's too late. Traditional reporting methods focus on historical data — they tell businesses who already left. Machine learning changes this approach entirely by answering a much more valuable question: **Which customers are likely to leave next?** Answering this question enables organizations to move from reactive decision-making to proactive customer retention. That shift is the primary motivation behind this project.

## Project Objectives

The goal of this project wasn't simply to train an accurate machine learning model. Instead, I wanted to build an end-to-end production-ready application capable of supporting real business decisions.

The primary objectives included:

- Predict whether an individual telecom customer is likely to churn.
- Estimate the probability of churn rather than producing only a binary prediction.
- Categorize customers into different risk levels.
- Explain every prediction using Explainable AI (SHAP).
- Present results through a clean and interactive web interface.
- Build a scalable REST API capable of serving predictions.
- Deploy the complete application to the cloud for real-world accessibility.

These objectives required combining several disciplines — including machine learning, backend development, frontend engineering, API design, and cloud deployment — into a single cohesive system.

## Project Architecture

One of the strengths of this project is that it demonstrates how machine learning models integrate into modern software systems rather than existing only inside Jupyter notebooks. The application follows a three-layer architecture:

### Frontend (React + Vite)

The frontend serves as the user interface where users enter customer information such as:

- Customer tenure
- Monthly charges
- Contract type
- Internet service
- Payment method
- Online security
- Technical support
- Streaming services
- Billing preferences

Once submitted, the frontend sends the customer data to the backend through a REST API. The prediction results including churn probability, overall risk level, and the key factors influencing the prediction are then displayed in a user-friendly format.

React was chosen because it enables the development of responsive, component-based interfaces that are easy to maintain and scale. Combined with Vite, it also offers fast development, efficient bundling, and an excellent developer experience.

### Backend (Django REST Framework)

The backend acts as the bridge between the frontend and the machine learning model. Its responsibilities include:

- Receiving prediction requests
- Validating user input
- Applying the same preprocessing steps used during model training
- Loading the serialized machine learning model
- Generating predictions
- Returning structured JSON responses
- Serving dashboard statistics
- Tracking recent prediction history

Using Django REST Framework (DRF) allowed me to expose the machine learning model through a clean RESTful API. This separation of concerns means that the frontend and backend can evolve independently, making the system more modular and easier to maintain.

### Machine Learning Layer (XGBoost + SHAP)

At the core of the application lies the predictive engine. This layer is responsible for:

- Processing customer features
- Predicting churn probability
- Assigning risk levels
- Identifying the most influential features
- Explaining predictions using SHAP values

Instead of functioning as an isolated notebook, the trained model was serialized into deployment-ready artifacts (\`model.pkl\` and \`preprocessor.pkl\`) and integrated into the backend. This approach ensures that the same preprocessing pipeline used during training is consistently applied during inference, reducing the risk of discrepancies between development and production environments.

## Exploring the IBM Telco Customer Churn Dataset

Every successful machine learning project begins with understanding the data. Even the most sophisticated algorithms will struggle if they're trained on poorly understood or poorly prepared datasets.

For this project, I used the IBM Telco Customer Churn dataset, one of the most widely used benchmark datasets for binary classification and customer analytics. It contains information about 7,043 telecom customers and includes demographic details, account information, subscribed services, billing behavior, and whether each customer ultimately stayed with or left the company.

The objective is straightforward: predict whether a customer is likely to churn based on the characteristics available at the time of prediction.

Although the dataset is relatively small compared to enterprise-scale telecom databases, it captures many of the factors that influence customer retention, making it an excellent dataset for building and demonstrating production-ready churn prediction systems.

### Understanding the Dataset

Each row in the dataset represents a single customer, while each column describes an aspect of that customer's relationship with the telecom company. Some variables describe who the customer is:

- Gender
- Senior citizen status
- Whether they have a partner
- Whether they have dependents

Other variables describe the services they subscribe to:

- Phone service
- Multiple phone lines
- Internet service
- Online security
- Online backup
- Device protection
- Technical support
- Streaming TV
- Streaming movies

Several columns capture billing and account information:

- Contract type
- Paperless billing
- Payment method
- Monthly charges
- Total charges
- Customer tenure

Finally, the target variable indicates whether the customer stayed or churned. This mix of demographic, behavioral, and financial features makes the dataset particularly suitable for supervised machine learning because the model can learn how combinations of customer characteristics influence the likelihood of churn.

## Why Customer Churn Prediction is a Classification Problem

Machine learning problems generally fall into two broad categories:

- **Regression**, where the goal is to predict a continuous numerical value.
- **Classification**, where the goal is to assign observations to predefined categories.

Since customers either stay or leave, churn prediction is a binary classification problem. Instead of predicting a numerical quantity like monthly revenue or customer lifetime value, the model predicts one of two possible outcomes:

- \`0\` → Customer stays
- \`1\` → Customer churns

Although the final prediction is binary, the model actually calculates a probability first.

| Customer | Churn Probability | Prediction |
| --- | --- | --- |
| Customer A | 0.12 | Stay |
| Customer B | 0.41 | Stay |
| Customer C | 0.89 | Churn |
| Customer D | 0.97 | Churn |

These probabilities are often more valuable than the binary prediction itself. A customer with a 95% churn probability requires immediate intervention, whereas a customer with a 52% probability might simply be monitored. This is why the application returns both:

- Predicted class
- Churn probability
- Risk level
- Key contributing factors

Providing richer information enables business teams to prioritize retention efforts more effectively.

## Exploratory Data Analysis (EDA)

EDA is the process of investigating a dataset before building machine learning models. Its purpose is to understand the structure of the data, identify potential issues, detect patterns, and generate hypotheses.

Rather than immediately training an algorithm, data scientists first ask questions such as:

- Are there missing values?
- Are there duplicate records?
- Which variables appear related to churn?
- Are there unusual distributions?
- Is the dataset balanced?
- Which features might require transformation?
- Which variables may benefit from feature engineering?

Answering these questions early prevents costly mistakes later in the machine learning pipeline. For this project, the EDA stage involved visualizing customer distributions, examining churn rates across different categories, analyzing numerical relationships, and identifying variables that appeared most predictive.

By the end of the exploratory analysis, I had developed a much clearer understanding of the dataset's structure, customer behavior, and the variables most closely associated with churn. These insights laid the foundation for the next phase of the project: data cleaning and feature engineering.

## Data Cleaning: Preparing the Dataset for Machine Learning

One of the most underestimated stages of any machine learning project is data cleaning. While model selection often receives the most attention, the quality of a model is ultimately determined by the quality of the data it learns from. A popular saying in data science captures this perfectly: **"Garbage in, garbage out."**

No matter how advanced an algorithm is, it cannot produce reliable predictions if it is trained on inconsistent, incomplete, or poorly formatted data. Industry surveys consistently show that data scientists spend a significant portion of their time preparing and cleaning data rather than building models.

For this project, the data cleaning process involved addressing missing values, correcting data types, removing unnecessary information, and preparing the target variable for supervised learning.

## Why Feature Engineering Matters

After cleaning the data, the next stage was feature engineering. Feature engineering is the process of creating new variables from existing data to help machine learning models identify patterns more effectively.

Many beginners assume that selecting a sophisticated algorithm automatically leads to better performance. In reality, well-designed features often contribute more to model accuracy than switching from one algorithm to another. Feature engineering incorporates domain knowledge into the dataset. Instead of relying solely on raw variables, we create new features that better represent customer behavior, business risk, or operational insights.

For this project, several domain-specific features were engineered based on business understanding of customer churn. These new variables significantly enriched the dataset and improved the model's ability to distinguish between customers likely to stay and those likely to leave. The features included:

- Tenure groups
- Average monthly spend
- Multiple service indicator
- Contract risk score
- Customer value segment

![Feature engineering visualizations showing engineered features against churn](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784320801/feat_eng_viz_t9u3sm.png)

### Validating the Engineered Features

Creating new features is only worthwhile if they genuinely improve understanding of the data. After engineering these variables, I visualized each one against the target variable to verify that they captured meaningful churn patterns. The results were encouraging.

The engineered features clearly reinforced trends observed during exploratory data analysis:

- Customers in the earliest tenure groups experienced significantly higher churn.
- Higher-risk contract categories aligned closely with increased cancellation rates.
- Customer value segments revealed distinct retention behaviors.
- Service adoption patterns provided additional predictive signals.

These visual validations increased confidence that the engineered features were contributing meaningful information rather than introducing unnecessary complexity. Feature engineering transformed the dataset from a collection of raw customer records into a richer representation of customer behavior and business context.

### Why Feature Engineering Often Outperforms More Complex Models

One of the biggest lessons from this project is that better features frequently outperform more complicated algorithms. Many practitioners immediately search for increasingly sophisticated models, believing that higher complexity automatically leads to better performance.

However, even the most advanced algorithms can only learn from the information available. Thoughtfully engineered features expose hidden relationships, simplify complex behaviors, and incorporate domain expertise that raw data alone may not reveal. In many real-world machine learning applications, investing time in understanding the business problem and designing meaningful features produces greater performance improvements than endlessly tuning model hyperparameters.

## Building the Machine Learning Pipeline

Once the dataset had been cleaned and enriched through feature engineering, the next step was preparing it for machine learning. While this might sound straightforward, it is one of the most critical stages in any data science project.

Machine learning algorithms cannot work directly with raw data. Before a model can learn meaningful patterns, every feature must be transformed into a format that the algorithm understands. This process is known as data preprocessing.

A well-designed preprocessing pipeline ensures that data is handled consistently during both training and deployment. Without one, the model may receive inputs during production that differ from what it saw during training, resulting in unreliable predictions.

To avoid this problem, I built a preprocessing pipeline using Scikit-learn's \`ColumnTransformer\`, allowing every transformation applied during training to be saved and reused later by the Django backend. This approach ensures consistency, reproducibility, and scalability — three essential characteristics of production-ready machine learning systems.

### Why Data Preprocessing Matters

Imagine training a model using one version of the data but sending completely different input formats during deployment. For example:

- The model was trained using scaled numerical values.
- The deployed application sends raw numbers.
- Categorical variables were encoded during training.
- The production API sends plain text categories.

Although these differences might seem small, they can dramatically reduce prediction accuracy because the model is effectively receiving unfamiliar data. This problem is known as **training-serving skew**, and it is one of the most common causes of machine learning failures in production.

By saving the preprocessing pipeline alongside the trained model, every incoming customer record is transformed exactly the same way it was during training. This guarantees that the model receives data in a consistent format regardless of whether predictions are generated inside a notebook, through an API, or from a web application.

### Using ColumnTransformer

One challenge with real-world datasets is that not every feature should be processed in the same way. Consider the IBM Telco dataset. Some variables are numerical:

- Tenure
- Monthly Charges
- Total Charges
- Average Monthly Spend
- Contract Risk Score

Others are categorical:

- Gender
- Internet Service
- Contract Type
- Payment Method
- Online Security
- Tech Support
- Customer Value Segment

Some engineered features are already represented numerically and therefore require no transformation. Applying identical preprocessing to every feature would be inappropriate. This is where \`ColumnTransformer\` becomes extremely valuable.

Rather than building multiple independent preprocessing steps, \`ColumnTransformer\` allows different transformations to be applied to different subsets of columns within a single unified pipeline. Conceptually, the preprocessing workflow looked like this:

- Numerical features → \`StandardScaler\`
- Categorical features → \`OneHotEncoder\`
- Already suitable numerical features → passed through unchanged

Although the workflow appears simple, it provides a significant engineering advantage. Instead of manually preprocessing every prediction request inside the backend, the entire transformation process is stored inside the serialized \`preprocessor.pkl\` artifact.

During deployment, the Django API simply loads the saved preprocessor and applies the exact same transformations before sending the data to the XGBoost model. This eliminates inconsistencies while keeping the backend code clean and maintainable.

### Scaling Numerical Features with StandardScaler

Machine learning algorithms often perform better when numerical variables exist on similar scales. Consider these two features:

| Feature | Example Value |
| --- | --- |
| Tenure | 48 |
| Monthly Charges | 95 |
| Total Charges | 5,200 |

Although all three variables are important, their numerical ranges differ substantially. Some algorithms may inadvertently assign greater importance to features with larger numeric values simply because of their scale. To reduce this issue, I applied \`StandardScaler\` to selected numerical features. \`StandardScaler\` transforms each feature by subtracting its mean and dividing by its standard deviation.

The resulting values have:

- Mean ≈ 0
- Standard deviation ≈ 1

This standardization allows numerical variables to contribute more evenly during model training. It's worth noting that XGBoost itself does not strictly require feature scaling because tree-based algorithms split data based on thresholds rather than distances. However, scaling was still included because:

- It creates a more consistent preprocessing pipeline.
- It improves compatibility if different algorithms are tested later.
- It standardizes engineered numerical features.
- It promotes cleaner and more reproducible workflows.

Designing flexible preprocessing pipelines is a best practice that makes experimentation much easier in future iterations of a project.

### Encoding Categorical Variables with One-Hot Encoding

One of the biggest challenges in customer churn prediction is that many features are categorical rather than numerical. For example:

- \`Contract = Month-to-month\`
- \`Internet Service = Fiber optic\`
- \`Payment Method = Electronic check\`

Humans understand these categories immediately. Machine learning algorithms do not. Algorithms only operate on numerical values. A naive approach might assign numbers directly:

- Fiber = 1
- DSL = 2
- No Internet = 3

However, this introduces an unintended mathematical relationship. The algorithm may incorrectly assume that \`3 > 2 > 1\` or that "No Internet" is somehow greater than "Fiber." In reality, these categories have no inherent numerical order. To solve this problem, I used **One-Hot Encoding**.

Instead of converting one column into numerical rankings, One-Hot Encoding creates separate binary columns for each category.

| Internet Service | Fiber | DSL | No Internet |
| --- | --- | --- | --- |
| Fiber | 1 | 0 | 0 |
| DSL | 0 | 1 | 0 |
| No Internet | 0 | 0 | 1 |

This representation preserves the categorical nature of the data while making it compatible with machine learning algorithms. Although One-Hot Encoding increases the number of features, it prevents misleading mathematical relationships and allows the model to learn independent effects for each category.

### Splitting the Dataset into Training and Testing Sets

After preprocessing was defined, the dataset was divided into training and testing subsets. The split followed an 80/20 ratio:

- 80% Training Data
- 20% Testing Data

This separation is essential because evaluating a model on the same data used for training would produce unrealistically optimistic results. Training data teaches the model and testing data evaluates whether the model has learned patterns that generalize beyond the examples it has already seen.

### Why Stratified Sampling Was Used

Rather than performing a random split, I used stratified sampling. Remember that the churn dataset is imbalanced:

- Approximately 73% Stay
- Approximately 27% Churn

A purely random split could accidentally produce:

- Training Set: 80% Stay, 20% Churn
- Testing Set: 90% Stay, 10% Churn

Such discrepancies make evaluation unreliable because the testing data no longer reflects the original population. Stratified sampling preserves the class proportions in both datasets. Maintaining this balance ensures that performance metrics accurately reflect how the model is likely to behave in real-world scenarios.

## Training the XGBoost Model

With the data fully prepared, the next step was training the machine learning model. Model selection is one of the most discussed aspects of any machine learning project, but choosing the "best" algorithm isn't simply about selecting the newest or most complex option. The ideal model depends on the type of data, the business problem, and the desired balance between performance, interpretability, computational efficiency, and deployment requirements.

For this project, I selected **XGBoost (Extreme Gradient Boosting)**, one of the most widely used algorithms for structured tabular data. XGBoost has consistently demonstrated state-of-the-art performance in data science competitions and real-world business applications, making it a strong choice for customer churn prediction.

Its popularity stems from its ability to model complex, non-linear relationships while remaining efficient enough for production environments. Since churn is influenced by multiple interacting factors such as contract type, tenure, billing behavior, and subscribed services, an algorithm capable of capturing these interactions is essential.

### Why XGBoost?

There are many algorithms that could be used for binary classification, including:

- Logistic Regression
- Decision Trees
- Random Forests
- Support Vector Machines (SVM)
- K-Nearest Neighbors (KNN)
- Neural Networks
- Gradient Boosting
- XGBoost

Each has its strengths and trade-offs. For example, Logistic Regression is highly interpretable but may struggle to capture complex, non-linear relationships. Decision Trees are intuitive but prone to overfitting. Neural Networks are powerful but often require significantly larger datasets and more computational resources.

XGBoost strikes an excellent balance between predictive performance, speed, and robustness. Some of its key advantages include:

- Excellent performance on structured datasets
- Ability to model non-linear feature interactions
- Built-in regularization to reduce overfitting
- Efficient handling of missing values
- Fast training through parallel processing
- Compatibility with feature importance and explainability techniques such as SHAP

Because the IBM Telco dataset consists primarily of structured customer records rather than images or text, XGBoost was a natural choice.

## Evaluating the Model

Once training was complete, the model was evaluated on the unseen test dataset. This is arguably the most important stage of model development because it measures how well the model is likely to perform in production.

Rather than relying on a single metric, I evaluated the classifier using several complementary performance measures: accuracy, precision, recall, and F1 Score. Each metric highlights a different aspect of model behavior.

- **Accuracy** measures the proportion of predictions that were correct.
- **Precision** answers an important business question: of all customers predicted to churn, how many actually did?
- **Recall** measures how many of the actual churning customers the model successfully identified.
- **F1 Score** provides a balanced measure by calculating the harmonic mean of precision and recall.

### Understanding the Confusion Matrix

![Model evaluation metrics including confusion matrix, ROC curve, and precision-recall curve](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784320822/model_evaluation_xgti3i.png)

To better understand prediction outcomes, I also generated a confusion matrix. A confusion matrix summarizes predictions into four categories:

| Actual | Predicted | Outcome |
| --- | --- | --- |
| Stay | Stay | True Negative |
| Stay | Churn | False Positive |
| Churn | Churn | True Positive |
| Churn | Stay | False Negative |

Unlike a single metric, the confusion matrix provides a complete picture of model performance. For example, it reveals:

- How many churning customers were successfully identified?
- How many loyal customers were incorrectly flagged?
- How many customers were missed entirely?

Understanding these outcomes helps businesses evaluate the operational impact of deploying the model. For example, if retention campaigns are inexpensive, a company may accept more false positives to ensure that fewer churning customers are overlooked. Conversely, if retention offers are costly, the business may choose a higher decision threshold to improve precision.

## Beyond Accuracy: ROC Curves, Precision-Recall Curves, and Explainable AI with SHAP

Building an accurate machine learning model is only part of the challenge. In real-world business environments, decision-makers need confidence that a model is both reliable and understandable.

Imagine presenting a churn prediction model to a telecom company's executive team. Suppose the model predicts that a customer has an 89% probability of churning. A manager is likely to ask:

- Why is this customer considered high risk?
- Which factors influenced the prediction?
- Can we do anything to reduce that risk?
- How confident is the model?

Simply responding, "The algorithm says so," isn't sufficient. Modern machine learning systems are increasingly expected to provide not only accurate predictions but also clear explanations. This is especially important in industries such as finance, healthcare, insurance, and telecommunications, where model outputs influence significant business decisions.

To evaluate the reliability of the model and make its predictions interpretable, I used two complementary approaches:

- Performance evaluation using ROC and Precision-Recall curves.
- Model explainability using SHAP (SHapley Additive exPlanations).

Together, these techniques help answer two critical questions:

- Can we trust the model's predictions?
- Can we understand why the model made them?

### Understanding the ROC Curve

One of the most widely used evaluation tools for classification models is the Receiver Operating Characteristic (ROC) Curve. Unlike accuracy, which measures performance at a single classification threshold, the ROC curve evaluates the model across every possible decision threshold.

### Precision-Recall Curves

Although ROC curves are extremely useful, they are not always sufficient for imbalanced datasets. Recall that approximately 73% of customers stayed and 27% churned. When one class significantly outnumbers another, Precision-Recall (PR) curves often provide a more realistic picture of performance. Instead of comparing recall and false positive rate, the Precision-Recall curve examines the relationship between precision and recall. This relationship is important because improving recall often reduces precision.

## The Black Box Problem

Although XGBoost delivers excellent predictive performance, it introduces another challenge. Unlike simple linear models, XGBoost consists of hundreds of interconnected decision trees. This complexity makes it difficult to explain individual predictions.

Imagine asking the model: "Why is this customer predicted to churn?" Without specialized interpretability tools, the answer would essentially be: "Because that's what hundreds of trees collectively decided."

For many organizations, this lack of transparency creates trust issues. Managers may hesitate to base retention strategies on predictions they cannot understand. This challenge is commonly known as the **black box problem** in machine learning.

As models become more sophisticated, their internal reasoning often becomes harder for humans to interpret. This is where Explainable AI (XAI) becomes invaluable.

### What is Explainable AI?

Explainable AI (XAI) refers to techniques that make machine learning models easier for humans to understand. Instead of treating predictions as mysterious outputs, XAI identifies:

- Which features influenced a prediction
- Whether each feature increased or decreased risk
- How strongly each feature contributed
- Why different customers receive different predictions

Explainability provides several benefits:

- Increased stakeholder trust
- Easier debugging
- Regulatory compliance
- Better business decision-making
- Improved customer communication

For churn prediction, explanations are particularly valuable because they help transform predictions into actionable retention strategies. Knowing that a customer will likely churn is useful. Knowing **why** they may churn is far more valuable.

## Introducing SHAP

To explain model predictions, I used **SHAP (SHapley Additive exPlanations)**. SHAP is one of the most widely adopted explainability frameworks in modern machine learning.

SHAP determines how much each feature contributed to reaching that probability. Perhaps:

- Month-to-month contract increased churn risk significantly.
- Short tenure increased risk.
- High monthly charges increased risk.
- Lack of technical support increased risk.
- Long customer history decreased risk slightly.

Rather than producing one opaque prediction, SHAP decomposes the prediction into understandable pieces. This makes complex machine learning models far more transparent.

### Global Model Explanations

One of SHAP's most powerful capabilities is explaining the model globally. Instead of examining one customer, global explanations summarize how the model behaves across the entire dataset.

I generated a SHAP summary (beeswarm) plot, which ranks features according to their overall importance while also showing how feature values influence predictions.

![SHAP summary beeswarm plot showing global feature importance across the dataset](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784320856/shap_summary_beeswarm_fmesms.png)

The analysis revealed several dominant churn drivers:

- Month-to-month contracts
- Short customer tenure
- No online security
- No technical support
- High monthly charges
- Fiber optic internet service
- Electronic check payment method

These findings closely matched the patterns identified during exploratory data analysis, providing strong evidence that the model was learning genuine business relationships rather than random noise.

### Explaining Individual Predictions with SHAP

While global explanations help us understand how the model behaves overall, businesses rarely make decisions about "average" customers. Customer retention teams work with individual customers.

When a particular customer appears at high risk of churning, decision-makers need to understand the specific reasons behind that prediction before deciding how to intervene. This is where local explainability becomes incredibly valuable. Rather than answering "What drives churn across the entire customer base?" local explanations answer "Why did the model predict that this specific customer is likely to churn?"

To provide these insights, I generated SHAP force plots and waterfall plots, both of which break down an individual prediction into the contributions made by each feature.

### SHAP Force Plots

![SHAP force plot explaining an individual customer's churn prediction](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784320845/shap_force_plot_lvu54w.png)

One of the visualizations generated during the project was the SHAP force plot. A force plot illustrates how different features influence a single prediction. The visualization begins with a baseline prediction, representing the average churn probability across all customers.

Each feature then acts like a force:

- Features increasing churn push the prediction upward.
- Features decreasing churn pull it downward.

### SHAP Waterfall Plots

![SHAP waterfall plot showing sequential feature contributions to a single prediction](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784320868/shap_waterfall_c9fz9c.png)

Another visualization used in the notebook was the waterfall plot. Although similar to the force plot, waterfall plots present feature contributions in a more structured sequence. The visualization starts with the baseline prediction and adds each feature one by one until the final probability is reached.

This makes it easy to answer questions like:

- Which feature contributed the most?
- Which factors partially offset the risk?
- How much did each variable change the prediction?

For analysts presenting results to business stakeholders, waterfall plots are often easier to interpret than raw numerical outputs.

### Why Explainability Matters in Business

Machine learning projects often focus almost entirely on predictive accuracy. However, accuracy alone is rarely enough for production systems. Imagine a customer success manager receives a list containing 5,000 customers predicted to churn. Without explanations, the list provides little practical value.

The manager still doesn't know:

- Which customers need immediate attention?
- Why they're likely to leave?
- Which intervention might be effective?

Explainability transforms predictions into actionable insights.

## Translating Machine Learning into Business Strategy

One of the primary goals of this project was not merely to predict churn but to help businesses reduce it. Machine learning becomes most valuable when predictions lead to measurable improvements. Based on the SHAP analysis, I developed several retention recommendations:

| SHAP Finding | Business Strategy |
| --- | --- |
| Month-to-month contracts | Offer discounts for annual contract upgrades |
| Short tenure | Strengthen onboarding and early engagement |
| High monthly charges | Introduce loyalty pricing tiers |
| No online security | Bundle security with internet packages |
| No technical support | Improve customer support services |
| Electronic check payments | Incentivize AutoPay enrollment |

Each recommendation directly addresses one of the model's most influential churn drivers. This demonstrates how explainable AI bridges the gap between technical model outputs and strategic business decisions.

## Building the Backend with Django REST Framework

The backend serves as the central processing layer of the application. While the frontend focuses on collecting user input and displaying results, the backend is responsible for all communication with the machine learning model.

Its responsibilities include:

- Receiving prediction requests
- Validating incoming data
- Applying the saved preprocessing pipeline
- Loading the trained model
- Generating predictions
- Returning structured JSON responses
- Serving dashboard statistics
- Tracking recent prediction history

To implement these capabilities, I used Django REST Framework (DRF). DRF extends Django with powerful tools for building RESTful APIs, making it an excellent choice for serving machine learning models.

### Loading the Trained Model

One challenge in deploying machine learning models is ensuring that the exact model used during training is also used in production. Retraining the model every time the server starts would be inefficient and impractical.

Instead, the trained XGBoost classifier was serialized into a file named \`model.pkl\`. Similarly, the complete preprocessing pipeline was saved as \`preprocessor.pkl\`.

During deployment, the backend loads these artifacts into memory. Whenever a prediction request arrives, the workflow becomes:

1. Receive customer data.
2. Validate the input.
3. Apply the saved preprocessing pipeline.
4. Generate a churn probability using XGBoost.
5. Determine the customer's risk level.
6. Return the prediction to the frontend.

Because the preprocessing pipeline was also saved, the backend performs exactly the same transformations used during model training. This consistency eliminates training-serving skew and ensures reliable predictions.

## Building the Frontend with React

While the backend performs the computational work, the frontend provides the user experience. I built the client application using React with Vite. React was selected because it enables developers to create reusable UI components that simplify development and improve maintainability.

Instead of refreshing entire web pages after every interaction, React updates only the components that change. This creates a smoother and faster user experience.

The application allows users to enter customer attributes such as:

- Customer tenure
- Monthly charges
- Contract type
- Internet service
- Technical support
- Payment method
- Online security
- Streaming services
- Billing preferences

Once submitted, the frontend sends the information to the backend API and displays:

- Predicted churn status
- Churn probability
- Risk category
- Key factors contributing to the prediction

Presenting results visually makes the application accessible not only to data scientists but also to business stakeholders with limited technical backgrounds.

## Deploying the Application on Render

A machine learning project only becomes truly useful when others can access it. To make the application publicly available, I deployed both the frontend and backend using Render. The repository includes a \`render.yaml\` configuration file that automates deployment.

Render creates two services:

- A **Web Service** for the Django REST API.
- A **Static Site** for the React frontend.

After deployment, the workflow becomes:

1. A user opens the web application.
2. The React frontend collects customer information.
3. The frontend sends a request to the Django API.
4. Django loads the preprocessing pipeline and trained model.
5. XGBoost generates a prediction.
6. The API returns the result.
7. React displays the prediction instantly.

This deployment pipeline demonstrates how machine learning models transition from experimentation into real-world applications that users can interact with through a browser.

## Future Improvements

Although the application performs well, several enhancements could make it even more powerful. Future improvements include:

- Implementing user authentication to support multiple users and secure prediction histories.
- Connecting the application to a live telecom database instead of relying on a static dataset.
- Adding real-time monitoring to track model performance and detect model drift over time.
- Automating periodic model retraining as new customer data becomes available.
- Containerizing the application with Docker for easier deployment across different environments.
- Establishing a CI/CD pipeline using GitHub Actions to automate testing and deployment.
- Exploring ensemble approaches or advanced gradient boosting libraries such as LightGBM and CatBoost for performance comparison.
- Expanding the dashboard with richer visual analytics and business KPIs.

These improvements would move the application even closer to an enterprise-grade machine learning platform.

## Conclusion

Customer churn prediction is one of the most impactful applications of machine learning because it directly supports business growth through proactive customer retention. In this project, I built an end-to-end solution that goes far beyond model training by combining data preprocessing, feature engineering, class balancing with SMOTE, XGBoost classification, SHAP explainability, Django REST Framework, React, and cloud deployment into a single production-ready application.

The final model achieved a cross-validation ROC-AUC of approximately 0.8405 and a test ROC-AUC of approximately 0.8398, demonstrating strong predictive performance on unseen customer data. More importantly, integrating SHAP made every prediction transparent, allowing business stakeholders to understand the drivers behind churn and translate those insights into targeted retention strategies.

This project also reinforced a broader lesson: building successful AI systems requires much more than training an accurate model. It demands a deep understanding of the business problem, careful data preparation, thoughtful feature engineering, robust evaluation, explainable predictions, scalable software architecture, and reliable deployment practices.

As organizations continue investing in predictive analytics, solutions like this demonstrate how machine learning can evolve from experimental notebooks into practical applications that support real-world decision-making. By combining modern data science techniques with full-stack development, businesses can move from reacting to customer losses after they occur to proactively identifying at-risk customers, improving retention, and creating measurable long-term value.`,
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
  {
    id: '5',
    title:
      'Building a Production-Style Hospital Management System API with FastAPI, PostgreSQL, JWT Authentication, and Docker',
    slug: 'hospital-management-system-api',
    category: 'Backend',
    publishDate: '2026-07-18',
    author: 'Desire',
    excerpt:
      'A production-style FastAPI REST API for hospital management featuring JWT authentication, role-based access control, PostgreSQL, Docker, and secure healthcare workflows.',
    featuredImage:
      'https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316309/HMSystem_API_h0kgib.png',
    imageAlt:
      'Hospital Management System API architecture diagram with FastAPI, PostgreSQL, and Docker',
    metaTitle:
      'Hospital Management System API with FastAPI, PostgreSQL, JWT and Docker | Desire Eyotaru',
    metaDescription:
      'A production-style FastAPI REST API for hospital management featuring JWT authentication, role-based access control, PostgreSQL, Docker, and secure healthcare workflows.',
    targetKeywords: [
      'fastapi',
      'postgresql',
      'jwt authentication',
      'docker',
      'rest api',
      'role-based access control',
      'sqlalchemy',
      'alembic',
    ],
    tags: [
      'fastapi',
      'postgresql',
      'jwt',
      'docker',
      'sqlalchemy',
      'alembic',
      'pydantic',
      'bcrypt',
      'faker',
      'python',
    ],
    content: `## Introduction

Healthcare is one of the most data-intensive industries in the world. Every day, hospitals manage thousands of interactions involving patients, doctors, appointments, medical histories, prescriptions, and administrative processes.

Behind every successful healthcare organization is a complex software ecosystem responsible for organizing information, protecting sensitive data, and ensuring that healthcare professionals can access the right information at the right time.

A hospital management system is one of the most important examples of business software because it connects multiple workflows into one centralized platform. Doctors need access to patient histories and medical records. Patients need a way to schedule appointments and access their information. Administrators need tools to manage departments, healthcare staff, and system access.

Without a properly designed backend system, managing these processes becomes inefficient, error-prone, and difficult to scale. To explore these challenges from a software engineering perspective, I built a Hospital Management System API — a backend-focused REST API designed to simulate the core operations of a modern healthcare platform.

The project focuses on building a secure, scalable backend using modern Python technologies including:

- **FastAPI** for API development
- **PostgreSQL** for relational data storage
- **SQLAlchemy** for database modeling
- **Alembic** for database migrations
- **JWT authentication** for secure access control
- **Docker and Docker Compose** for containerized development
- **Faker** for realistic test data generation

The goal was not simply to create CRUD endpoints, but to design a backend system that reflects real-world software engineering practices.

## Project Overview

The Hospital Management System API is a backend-only REST API that provides the foundation for managing hospital operations. The system was designed around three major user groups:

### Administrators

Administrators are responsible for managing the overall hospital platform. Their responsibilities include managing departments, managing doctors, controlling system access, monitoring hospital operations, and managing user permissions.

For example, an administrator may create a new department such as cardiology, neurology, pediatrics, or emergency medicine. They can then assign doctors to those departments and manage access across the platform.

### Doctors

Doctors interact with the system primarily through patient care workflows. Their responsibilities include viewing assigned patient information, managing appointments, creating medical records, recording diagnoses, and creating prescriptions.

A typical workflow might look like this: a patient books an appointment, the doctor reviews the patient's history, the doctor conducts a consultation, the doctor creates a medical record, and finally the doctor issues a prescription. The API was designed to support this type of real-world healthcare workflow.

### Patients

Patients interact with the system to manage their healthcare information. Their capabilities include accessing their profile, viewing appointments, booking consultations, accessing medical records, and viewing prescriptions.

The system ensures that patients only have access to their own information. This is achieved through authentication and role-based authorization.

## Why Build a Hospital Management System API?

### Real-World Data Modeling

Healthcare systems contain many interconnected entities. For example:

- A patient does not exist independently and can have multiple appointments, multiple medical records, and multiple prescriptions.
- A doctor can have multiple appointments and multiple patient consultations.
- A department can contain multiple doctors.

These relationships require careful database design. A poorly designed database can create problems such as duplicate information, slow queries, difficult maintenance, and data inconsistencies. Designing this system required thinking about how healthcare information naturally connects.

### Security and Access Control

Healthcare applications handle sensitive information. Medical records, prescriptions, and patient details cannot be accessible to everyone. A hospital administrator should not have the same permissions as a patient, a patient should not be able to view another patient's medical history, and a doctor should only access information necessary for providing care.

This introduces important backend concepts:

- **Authentication** answers: "Who are you?" The system verifies a user's identity using login credentials. After successful authentication, the user receives a secure token.
- **Authorization** answers: "What are you allowed to do?" After identifying the user, the system determines their permissions.

## Project Goals

The main objectives of this project were:

### 1. Build a Secure REST API

The system needed user registration, login functionality, JWT authentication, protected endpoints, and role-based permissions.

### 2. Create a Realistic Database Model

The database needed to represent users, patients, doctors, departments, appointments, medical records, and prescriptions.

### 3. Apply Professional Backend Practices

The project implemented clean architecture, ORM-based database management, migration workflows, environment configuration, and containerization.

### 4. Create a Demonstrable Development Environment

To make the project easy to test and showcase, it includes Swagger API documentation, Docker setup, automated database migrations, and seed data generation. A developer or recruiter can run the project and immediately explore realistic hospital workflows.

## Technical Stack Overview

The backend was built using the following technologies:

| Technology | Purpose |
| --- | --- |
| FastAPI | REST API framework |
| Python | Backend programming language |
| PostgreSQL | Relational database |
| SQLAlchemy | Database ORM |
| Alembic | Database migrations |
| Pydantic | Data validation |
| JWT | Authentication |
| bcrypt | Password security |
| Docker | Containerization |
| Docker Compose | Multi-container environment |
| Faker | Test data generation |

Each technology solves a specific engineering problem and together, they create a backend system that resembles the architecture of production applications.

## Understanding the System Architecture

A strong backend application is not defined only by the endpoints it exposes. The real engineering challenge lies in how the system is structured internally.

As applications grow, poorly organized code becomes difficult to maintain. A small change in one feature can break another part of the application. Database logic becomes mixed with business rules, authentication becomes scattered throughout the codebase, and adding new functionality becomes increasingly complicated.

To avoid these problems, the Hospital Management System API follows a layered backend architecture that separates different responsibilities. This approach is commonly used in professional software systems because it improves maintainability, scalability, testing, team collaboration, and code organization.

The architecture can be represented as:

\`\`\`
Client Application
       |
       |
  HTTP Requests
       |
       |
  FastAPI Layer
(Routes & Validation)
       |
       |
  Service Layer
(Business Logic Rules)
       |
       |
  ORM Layer
(SQLAlchemy Models)
       |
       |
  Database Layer
  (PostgreSQL)
       |
       |
  Migration Layer
   (Alembic)
\`\`\`

Each layer has a specific responsibility.

### FastAPI Layer: The API Gateway

The first layer of the system is the FastAPI layer. FastAPI acts as the entry point for all communication between users and the backend. When a patient, doctor, or administrator interacts with the application, their request first reaches FastAPI.

For example, a patient wants to create an appointment. The client sends \`POST /appointments\` with appointment information:

\`\`\`json
{
  "doctor_id": 15,
  "appointment_date": "2026-07-20",
  "reason": "General consultation"
}
\`\`\`

FastAPI receives this request and performs several responsibilities:

- **Request Routing:** FastAPI determines which function should handle the request. A developer working on appointments does not need to search through unrelated authentication or prescription code.
- **Request Validation with Pydantic:** One of FastAPI's strongest features is its integration with Pydantic. APIs receive external data, and external data cannot always be trusted. Without validation, malformed data could create database problems. Pydantic models ensure incoming data follows expected rules. If validation fails, the API returns an appropriate error response.
- **Automatic API Documentation:** FastAPI generates interactive documentation through \`http://localhost:8000/docs\` using OpenAPI and Swagger UI. Developers can view available endpoints, test requests, inspect required parameters, authenticate using JWT tokens, and understand API responses.

### Service Layer: Where Business Logic Lives

The service layer is the brain of the application. While FastAPI handles HTTP communication, the service layer decides what should actually happen. This separation is one of the most important architectural decisions in the project.

### Database Layer: PostgreSQL as the Data Foundation

Every application that stores information needs a reliable data layer. PostgreSQL is used as the primary database — a relational database management system designed for handling structured data. Healthcare systems are especially suited for relational databases because information naturally connects.

### SQLAlchemy ORM Layer

Working directly with SQL queries can become complicated. SQLAlchemy simplifies database interaction by allowing developers to work with Python objects instead of raw SQL.

### Migration Layer: Alembic

Database schemas change over time. A project may begin with users, patients, and doctors, then later require new requirements like insurance, payments, and notifications. Manually modifying databases is risky. Alembic solves this problem by tracking database changes through migrations.

### Docker Layer: Consistent Development Environment

One common problem in software development is "it works on my machine." Different developers may have different Python versions, different database installations, and different operating systems. Docker solves this by packaging the application environment. Anyone cloning the repository can run \`docker compose up\` and reproduce the same environment.

## How All Components Work Together

A complete workflow looks like this:

\`\`\`
User Login
  User
   |
  FastAPI Auth Endpoint
   |
  Validate Credentials
   |
  Generate JWT Token
   |
  Return Token
\`\`\`

Creating a medical record:

\`\`\`
Doctor
   |
  JWT Authentication
   |
  FastAPI Route
   |
  Permission Check
   |
  Medical Record Service
   |
  SQLAlchemy ORM
   |
  PostgreSQL Database
\`\`\`

Each component performs a specific role.

## Authentication and Authorization: Securing Healthcare Data

Security is one of the most important aspects of any healthcare software system. A hospital management platform does not simply store ordinary information. It manages highly sensitive data, including patient identities, medical histories, diagnoses, prescriptions, consultation notes, and appointment details.

A system that allows unauthorized access could expose private medical information and create serious privacy risks. Because of this, healthcare applications require strong security mechanisms that answer two fundamental questions:

- **Authentication:** Who is this user?
- **Authorization:** What is this user allowed to do?

The Hospital Management System API implements both concepts using JWT (JSON Web Token) authentication, password hashing with bcrypt, and Role-Based Access Control (RBAC).

### User Authentication Design

The project separates authentication data from healthcare profile data. Instead of storing everything in one table, the system separates:

\`\`\`
Users Table      -> Authentication Information
Patients Table   -> Healthcare Profile
Doctors Table    -> Healthcare Profile
\`\`\`

### Password Security with bcrypt

Passwords should never be stored as plain text. If the database is compromised, every password becomes exposed. Instead, applications store password hashes using bcrypt. The stored hash cannot easily be reversed into the original password.

### JWT Authentication

The project uses JSON Web Tokens (JWT) for authentication. JWT is a popular method for securing APIs because it works well with web applications, mobile applications, microservices, and distributed systems.

A JWT is a digitally signed token containing information about the authenticated user. A simplified JWT looks like \`xxxxx.yyyyy.zzzzz\` and contains three parts: header, payload, and signature. The header contains information about the token type, the payload contains user information, and the signature verifies that the token has not been modified. The backend creates it using a secret key and an encryption algorithm.

### Role-Based Access Control (RBAC)

Authentication alone is not enough. A hospital system has different categories of users. The project implements:

- **Admin Role:** Responsible for system management. Permissions include managing departments, managing doctors, managing users, and controlling access.
- **Doctor Role:** Responsible for healthcare workflows. Permissions include viewing patient information, creating medical records, managing appointments, and creating prescriptions.
- **Patient Role:** Responsible for personal healthcare access. Permissions include viewing own profile, booking appointments, viewing own records, and viewing prescriptions.

### Security Benefits of This Design

- **Stateless Authentication:** JWT allows the API to authenticate users without storing session information on the server. This makes scaling easier.
- **Separation of Responsibilities:** Authentication logic is separate from business logic. Doctors, patients, and administrators do not directly manage authentication details.
- **Granular Permissions:** Different users receive different access levels. This prevents unauthorized data modification, privacy violations, and accidental access to restricted information.

## Database Design and Healthcare Data Modeling

A backend application's database design is one of the most important architectural decisions a developer makes. The database determines how information is stored, connected, retrieved, and maintained throughout the lifetime of the application.

For a healthcare system, database design becomes even more important because medical information is highly interconnected. A patient's healthcare journey involves multiple connected events:

1. A patient registers in the system.
2. The patient books an appointment.
3. The appointment connects the patient with a doctor.
4. The doctor performs a consultation.
5. A medical record is created.
6. A prescription may be issued based on that medical record.

Each event depends on another. This means the database must accurately represent real-world healthcare workflows. The Hospital Management System API uses PostgreSQL as the relational database and SQLAlchemy as the Object Relational Mapper (ORM).

### Why PostgreSQL for a Hospital Management System?

PostgreSQL is a powerful open-source relational database management system. It is widely used in production applications because it provides strong data consistency, complex relationship management, transaction support, advanced querying capabilities, scalability, and reliability. Healthcare systems are a perfect match for relational databases because healthcare data is naturally structured.

### SQLAlchemy ORM Representation

Instead of manually writing SQL queries, SQLAlchemy represents these entities as Python classes:

\`\`\`python
class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone = Column(String)
\`\`\`

The Python model maps directly to a database table.

### Benefits of Using SQLAlchemy

- **Developer Productivity:** Developers work with Python objects instead of raw SQL.
- **Database Abstraction:** The application is less tightly coupled to one database system.
- **Relationship Management:** Complex relationships become easier to handle.
- **Cleaner Code Organization:** Models clearly represent business entities.

## Building Hospital Workflows through REST API Endpoints

A database is only useful when applications can interact with it effectively. In a real hospital environment, different users need different ways to interact with healthcare information: administrators need to manage the system, doctors need to access patient information and record consultations, and patients need to schedule appointments and view their healthcare history.

The Hospital Management System API transforms these real-world workflows into structured REST API endpoints. Instead of users directly interacting with the database, they communicate through a secure API layer:

\`\`\`
User Interface
   |
  HTTP Request
   |
  FastAPI Endpoint
   |
  Authentication + Authorization
   |
  Business Logic
   |
  Database Operation
   |
  HTTP Response
\`\`\`

This approach creates a secure and organized way to manage hospital operations.

### API Documentation with Swagger

One of FastAPI's strongest features is automatic API documentation. The project exposes \`http://localhost:8000/docs\`. Through Swagger UI, developers can explore endpoints, test API requests, add authentication tokens, view request schemas, and inspect responses.

Example workflow: open Swagger UI, login, copy the JWT token, click "Authorize," and test protected endpoints. This creates an interactive development experience.

## Production-Ready Features

Building a backend application that works locally is only the first step in software engineering. A professional backend system needs to be easy to set up, consistent across environments, safe to deploy, easy to maintain, and simple for other developers to understand.

A common difference between beginner projects and production-style systems is the attention given to the development and deployment workflow. The Hospital Management System API includes several features that move it closer to a production-ready backend:

- Docker containerization
- Docker Compose orchestration
- Alembic database migrations
- Environment-based configuration
- Automated seed data generation using Faker
- Interactive API documentation

These features demonstrate important DevOps and backend engineering practices.

## Technical Challenges, Engineering Decisions, and Lessons Learned

Building a backend system that represents real hospital operations involves much more than creating database tables and API endpoints. The biggest challenge in software engineering is translating a real-world problem into a reliable digital system.

Hospitals operate through complex workflows involving different users, responsibilities, permissions, and relationships. A successful backend must answer questions like:

- Who can access specific information?
- How should different users interact with the system?
- How should data relationships be represented?
- How can the system remain secure as it grows?
- How can future developers maintain and extend the application?

The Hospital Management System API was designed around these challenges.

## Future Improvements and Production Extensions

The Hospital Management System API already demonstrates many concepts used in professional backend development: REST API design, authentication and authorization, database modeling, ORM usage, containerization, migration management, environment configuration, and API documentation. However, real-world healthcare platforms are much larger ecosystems.

### Adding a Billing and Payment System

One of the biggest missing components in a hospital platform is financial management. Hospitals need systems to handle consultation fees, treatment costs, medication charges, insurance payments, invoices, and payment history.

### Appointment Notifications System

Currently, users can create and manage appointments. A production system would also need communication features. Patients should receive appointment confirmations, reminder notifications, cancellation alerts, and prescription updates.

### Advanced Analytics Dashboard

Hospitals generate large amounts of operational data. A data analytics layer could provide insights such as patient analytics, appointment analytics, and clinical analytics.

### Electronic Health Record (EHR) Expansion

The current project includes medical records. A full Electronic Health Record system would expand this significantly with laboratory results, imaging reports, patient history, allergies, vaccination records, vital signs, and clinical notes.

### Adding Search and Filtering Capabilities

As hospital data grows, users need efficient ways to find information. Doctors may search patients by name, records by diagnosis, and appointments by date. Administrators may search doctors by department and patients by registration date.

### Improving Security Further

The current project implements strong foundational security with JWT authentication, password hashing, and role-based access. A production healthcare system would require additional security layers.

### Cloud Deployment Architecture

The current project is already Docker-ready. Possible cloud components include virtual machines, container services, Kubernetes, managed PostgreSQL services, storage for medical documents, and monitoring for errors, performance, and availability.

### Healthcare Interoperability

A major challenge in healthcare software is communication between different systems. Hospitals often need to exchange information with laboratories, pharmacies, insurance companies, and government systems. Future improvements could include support for healthcare standards such as HL7 and FHIR.

### Testing Improvements

A production backend requires extensive testing. Future additions include unit tests, integration tests, and load testing.

### Machine Learning Opportunities

Healthcare systems generate valuable data that can support AI applications. Future ML features could include patient risk prediction, appointment no-show prediction, and medical decision support.

## Conclusion

Building the Hospital Management System API was an exercise in understanding how professional backend systems are designed. The project goes beyond basic CRUD operations by combining real-world domain modeling, secure authentication, role-based authorization, relational database architecture, API development, and deployment practices.

It demonstrates an important lesson in software engineering: great backend systems are not just collections of functions. They are carefully designed platforms that transform complex real-world processes into reliable digital experiences.

This project represents a strong foundation for expanding into larger healthcare platforms, SaaS applications, and enterprise backend systems. It showcases the mindset of a backend engineer who understands not only how to build features, but also how to design systems that can grow.`,
    featured: true,
    relatedProjectSlug: 'hospital-management-api',
  },
  {
    id: '7',
    title:
      'From Financial Data to Actionable Customer Segments: Building an Interactive Customer Segmentation Dashboard with K-Means, PCA, and Dash',
    slug: 'customer-segmentation-dashboard',
    category: 'Machine Learning',
    publishDate: '2025-02-20',
    author: 'Desire',
    readingTime: '22 min read',
    excerpt:
      'Built an interactive customer segmentation dashboard using K-Means, PCA, and Dash to uncover household financial patterns with real-time clustering insights and visualizations.',
    featuredImage:
      'https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316332/segmentation_wng0sm.png',
    imageAlt:
      'Interactive customer segmentation dashboard with K-Means clusters and PCA scatter plot',
    metaTitle:
      'Customer Segmentation Dashboard with K-Means, PCA and Dash | Desire Eyotaru',
    metaDescription:
      'Built an interactive customer segmentation dashboard using K-Means, PCA, and Dash to uncover household financial patterns with real-time clustering insights and visualizations.',
    targetKeywords: [
      'customer segmentation',
      'k-means clustering',
      'pca',
      'dash',
      'plotly',
      'unsupervised learning',
      'survey of consumer finances',
      'interactive dashboard',
    ],
    tags: [
      'k-means',
      'pca',
      'dash',
      'plotly',
      'scikit-learn',
      'python',
      'machine learning',
      'unsupervised learning',
      'render',
    ],
    content: `## Introduction

Businesses generate enormous amounts of customer data every day, but raw data alone rarely answers the questions that matter most:

- Which customers share similar financial behaviors?
- Which groups are more likely to respond to certain products?
- How can organizations personalize services without manually analyzing thousands of records?
- Are there hidden patterns that traditional reporting fails to uncover?

These questions are at the heart of customer segmentation, one of the most valuable applications of data science. Rather than treating every customer the same, organizations can divide their customer base into meaningful groups and make smarter business decisions based on those insights.

Customer segmentation powers many of the experiences we encounter every day. Banks use it to design financial products, retailers personalize promotions, insurance companies assess customer profiles, and marketing teams create campaigns tailored to specific audiences.

In this project, I built an end-to-end customer segmentation pipeline using Python and several machine learning techniques. Starting with the 2019 Survey of Consumer Finances (SCF) dataset published by the Federal Reserve, I explored household financial data, applied K-Means clustering to discover natural customer groups, reduced high-dimensional data using Principal Component Analysis (PCA) for visualization, and finally deployed an interactive Dash web application on Render.

Instead of producing a static notebook, I wanted users to experiment with the model themselves. The dashboard allows visitors to:

- Choose between trimmed variance and raw variance for feature selection.
- Adjust the number of clusters (K) using an interactive slider.
- View real-time clustering metrics such as inertia and silhouette score.
- Explore an interactive PCA visualization of customer segments.
- Compare the financial characteristics of each cluster through dynamically generated charts.

This project demonstrates not only machine learning techniques but also the complete workflow of transforming a data science model into a user-friendly application that anyone can interact with through a web browser.

## Project Overview

The primary objective of this project was to identify meaningful groups of U.S. households based on their financial characteristics using unsupervised machine learning. Unlike supervised learning, where models learn from labeled examples, this dataset contained no predefined customer categories. Instead, the goal was to allow the algorithm to discover naturally occurring groups based solely on similarities in financial behavior.

The project followed a structured data science workflow consisting of four major stages:

- Exploratory Data Analysis (EDA) to understand the dataset and identify important variables.
- K-Means clustering using a small set of features before expanding to multiple financial variables.
- Principal Component Analysis (PCA) to visualize high-dimensional clusters in two dimensions.
- Interactive dashboard development using Dash and Plotly, enabling users to experiment with clustering parameters in real time.

Rather than treating each notebook as a separate exercise, together they form a complete machine learning pipeline from raw data exploration to a deployed analytical application.

## Dataset

This project uses data from the 2019 Survey of Consumer Finances (SCF), a nationally recognized survey conducted by the Federal Reserve Board to study the financial characteristics of U.S. households.

The dataset contains detailed information on income, debt, assets, net worth, housing, education, retirement savings, and many other financial indicators. For this project, I narrowed the analysis to households that met two important criteria:

- They had been turned down for credit or feared being denied credit within the past five years (TURNFEAR == 1).
- Their net worth was below $2 million, helping focus the analysis on households with more comparable financial profiles while reducing the influence of extreme wealth outliers.

Filtering the data in this way made the clustering process more meaningful by concentrating on a specific population facing similar financial challenges. Among the many available variables, the project focused on several key financial indicators, including:

| Feature | Description |
| --- | --- |
| INCOME | Total household income |
| NETWORTH | Household net worth (assets minus liabilities) |
| DEBT | Total household debt |
| CCBAL | Credit card balance |
| HOUSES | Value of the primary residence |
| MRTHEL | Mortgage debt on the primary residence |
| NFIN | Total non-financial assets |
| RETQLIQ | Retirement account balances |
| AGE | Age of household head |
| EDUC | Education level |
| NHNFIN | Non-home non-financial assets |

Together, these variables provide a comprehensive view of a household's financial situation, making them well suited for discovering patterns that may not be immediately visible through traditional statistical analysis.

## Why Customer Segmentation Matters

Organizations rarely benefit from treating every customer as though they have identical needs. Two customers might earn similar incomes but differ dramatically in debt levels, home ownership, retirement savings, or financial risk. Marketing the same product to both customers would likely produce very different outcomes.

Customer segmentation solves this problem by grouping customers with similar characteristics. Instead of asking: "What does the average customer look like?" we instead ask: "What different types of customers exist?"

This shift in perspective enables organizations to create strategies tailored to each segment rather than relying on broad assumptions. For example, financial institutions can use segmentation to:

- Identify customers who may qualify for specific loan products.
- Detect groups with high debt but stable income.
- Understand households with strong savings but limited investments.
- Design personalized financial education programs.
- Improve customer retention through targeted recommendations.

Retail companies can segment customers based on purchasing behavior, while healthcare organizations can group patients with similar risk profiles. The underlying principle remains the same: uncover hidden patterns that lead to better decision-making.

Because the dataset used in this project did not include predefined customer categories, unsupervised learning was the ideal approach.

## Understanding Unsupervised Learning

Machine learning is often divided into two major categories:

### Supervised Learning

In supervised learning, the model learns from labeled examples. Here, the algorithm already knows the correct outcome and learns to predict it for future observations. Common supervised learning tasks include: Spam detection, House price prediction, Disease diagnosis, Fraud detection, and Sentiment analysis.

The previous projects in my portfolio, such as Fraud Detection and NLP Sentiment Analysis, fall into this category because they rely on labeled data to make predictions.

### Unsupervised Learning

In contrast, unsupervised learning works without labeled outcomes. The model receives only the input data and attempts to discover patterns on its own. Imagine placing hundreds of customer profiles on a table without any labels. Rather than predicting an answer, the algorithm looks for similarities and groups customers based on shared characteristics.

This makes unsupervised learning particularly useful for tasks such as: Customer segmentation, Recommendation systems, Market basket analysis, Anomaly detection, Topic modeling, and Image compression.

Among the many clustering algorithms available, K-Means remains one of the most widely used because it is intuitive, computationally efficient, and performs well for many practical segmentation problems.

## Exploring the Data

Before applying any machine learning algorithm, it's essential to understand the data you're working with. Even the most sophisticated model will struggle if the underlying data contains inconsistencies, outliers, or poorly chosen features.

That's why the first notebook in this project focused entirely on Exploratory Data Analysis (EDA). Rather than jumping straight into clustering, I examined the financial characteristics of the households, identified important variables, and explored relationships that would later influence feature selection.

This stage serves two important purposes:

- It helps uncover patterns that may already exist within the data.
- It provides the insight needed to make informed preprocessing and modeling decisions.

Skipping EDA often leads to models that are difficult to interpret or produce misleading results. By understanding the data first, we can build a more reliable and meaningful segmentation model.

## Filtering the Dataset

The original Survey of Consumer Finances contains thousands of observations across hundreds of variables describing different aspects of household finances. For this project, I narrowed the focus to households that satisfied two conditions:

- TURNFEAR == 1, meaning the household had either been denied credit or feared being denied credit in the previous five years.
- NETWORTH < $2,000,000, which excluded extremely wealthy households whose financial profiles could disproportionately influence the clustering process.

These filters were intentional. The first condition targeted households experiencing some level of credit insecurity, making the segmentation more relevant for understanding financial behavior within this specific population.

The second condition reduced the impact of extreme outliers. Financial datasets often contain a small number of observations with exceptionally high incomes or net worth, and these values can dominate statistical measures such as variance and distance calculations. By focusing on households below the $2 million threshold, the resulting clusters better represent typical financial profiles rather than being skewed by a handful of exceptionally wealthy individuals.

## Understanding Feature Distributions

Once the dataset had been filtered, I explored the distributions of several key variables, including: Household income, Net worth, Total debt, Credit card balances, Home values, Mortgage balances, Retirement savings, Age, and Education level.

Visualizing these variables revealed an important characteristic of financial data: most financial features are heavily skewed. For example, household income is rarely distributed evenly. Many households earn moderate incomes, while a much smaller number earn significantly more. The same pattern often appears with net worth, debt, and asset values.

This type of skewed distribution is common in real-world financial datasets and presents challenges for machine learning algorithms that rely on distance calculations. Without understanding these distributions, it's easy to assume that every feature contributes equally to clustering when, in reality, variables with extreme values can dominate the results.

## Investigating Relationships between Variables

Another important step involved examining how different financial variables relate to one another. Using correlation analysis, I explored relationships such as:

- Income versus net worth
- Debt versus mortgage balances
- Home values versus mortgage debt
- Assets versus retirement savings

Correlation does not imply causation, but it does help identify variables that move together. For instance, households with higher home values often carry larger mortgages, while higher incomes may correlate with larger retirement savings. Understanding these relationships helps determine whether multiple variables provide unique information or simply repeat similar patterns.

Although K-Means does not require independent features, recognizing strong relationships between variables is useful when interpreting the final clusters.

## Measuring Feature Variability

One of the most important questions in customer segmentation is: Which features actually help distinguish one household from another?

Variables that show little variation across households contribute relatively little to clustering because they don't provide enough information to separate observations. Conversely, variables with greater variability often capture meaningful differences between customers. To identify these informative variables, I calculated the variance for each financial feature.

Variance measures how spread out the values of a variable are around their average. A simple way to think about it is:

- Low variance means most households have similar values.
- High variance means households differ substantially.

Features with higher variance tend to be more useful because they contain more information that can help separate observations into distinct groups. However, financial data introduces an important complication.

### Why Raw Variance Isn't Always Enough

Suppose nearly every household in a dataset has an income between $40,000 and $90,000, but one household earns $20 million. That single observation dramatically increases the calculated variance, making income appear far more variable than it truly is for most households.

This is a classic example of outlier influence. Financial datasets frequently contain extreme values:

- Very wealthy households
- Exceptionally large investment portfolios
- High-value real estate
- Large inheritances
- Unusually high debts

While these observations are valid, they may not represent the majority of the population. If feature selection relies solely on raw variance, the chosen variables can be heavily influenced by these rare cases. To address this challenge, the project also incorporated trimmed variance.

### What Is Trimmed Variance?

Trimmed variance is a more robust alternative to standard variance. Instead of using every observation, trimmed variance removes a small percentage of the highest and lowest values before performing the calculation.

In this project, trimming reduces the influence of extreme outliers while preserving the overall structure of the data. The benefits include:

- More representative estimates of variability
- Reduced sensitivity to unusually large financial values
- More stable feature selection
- Better clustering performance for typical households

Rather than asking, "Which variables have the largest values?" trimmed variance asks, "Which variables vary the most for the majority of households?" This distinction becomes especially valuable when working with real-world financial datasets, where outliers are common.

## Selecting the Most Informative Features

After comparing both raw and trimmed variance, I ranked the financial variables according to how much they varied across households. Instead of feeding every available variable into the clustering algorithm, I selected the top five high-variance features.

This approach offers several advantages:

- It reduces computational complexity.
- It minimizes noise from less informative variables.
- It focuses the model on the characteristics that best differentiate households.
- It simplifies interpretation of the resulting customer segments.

Feature selection is often overlooked in unsupervised learning, but it's just as important as it is in supervised machine learning. Including too many irrelevant or low-information variables can make clusters less meaningful and harder to interpret.

The selected features then became the foundation for the next stage of the project.

## Building an Intuition for K-Means

Before clustering households using multiple financial variables, I wanted to understand how the algorithm behaves in a simpler setting. Instead of immediately working with high-dimensional data, I began by clustering using only two financial features.

Reducing the problem to two dimensions makes it much easier to visualize:

- How clusters are formed.
- Where cluster boundaries emerge.
- How centroids move during training.
- How changing the number of clusters affects the results.

This intermediate step serves as an excellent bridge between exploratory analysis and full-scale customer segmentation. It also provides an intuitive understanding of the mechanics behind K-Means clustering before introducing additional complexity with multiple features and Principal Component Analysis (PCA).

## Building Customer Segments with K-Means Clustering

With a solid understanding of the data and the most informative financial features identified, the next step was to uncover natural groupings of households. Since the dataset contained no predefined labels, this called for an unsupervised learning algorithm capable of discovering patterns based solely on similarities within the data.

For this project, I chose K-Means clustering, one of the most widely used clustering algorithms due to its simplicity, efficiency, and interpretability. The implementation was divided into two stages:

- First, clustering with two features to understand the algorithm visually.
- Then, clustering with multiple financial variables to build a more realistic segmentation model.

This progression made it easier to understand how K-Means behaves before scaling up to higher-dimensional data.

### What Is K-Means Clustering?

K-Means is an algorithm that groups similar observations into K distinct clusters. Rather than being told what each customer represents, the algorithm discovers groups by measuring how similar households are to one another.

The basic workflow looks like this:

1. Choose the desired number of clusters (K).
2. Randomly initialize K centroids.
3. Assign every household to its nearest centroid.
4. Recalculate the centroid of each cluster.
5. Repeat the assignment and update steps until the centroids stop moving significantly.

The result is a set of clusters where households within the same group are more similar to each other than they are to households in other groups. For customer segmentation, this means households with comparable income, debt, assets, and financial characteristics naturally end up in the same cluster.

### Starting Simple: Clustering Two Features

Before working with many variables simultaneously, I built a clustering model using only two financial features. This approach provides an intuitive way to see how K-Means partitions data because every household can be plotted directly on a two-dimensional graph.

The notebook explores how the algorithm:

- Places initial centroids.
- Assigns households to the nearest cluster.
- Updates centroid positions during training.
- Produces clearly defined customer groups.

Visualizing clusters in two dimensions also helps explain one of K-Means' strengths it excels at finding compact groups of observations that are close together in feature space. Although two variables cannot capture the full complexity of household finances, this step provides valuable insight into how clustering works before introducing additional dimensions.

### Choosing the Right Number of Clusters

One of the most common questions when using K-Means is: How many clusters should we create?

Unlike supervised learning, there is no correct answer already stored in the dataset. Instead, the number of clusters must be estimated using evaluation techniques. In this project, I relied on two widely used methods:

- The Elbow Method
- Silhouette Score

Together, these provide complementary ways of evaluating cluster quality.

#### The Elbow Method

The Elbow Method evaluates how well different values of K fit the data. For each value of K, the algorithm calculates inertia, which measures how close observations are to the centroid of their assigned cluster. Lower inertia generally indicates tighter clusters.

As more clusters are added:

- Inertia continues decreasing.
- However, each additional cluster provides a smaller improvement than the previous one.

When these values are plotted, the curve often forms an "elbow." That elbow represents a balance between:

- Too few clusters (overly broad groups)
- Too many clusters (overly fragmented groups)

Choosing K near the elbow often produces meaningful customer segments without unnecessary complexity. However, inertia alone doesn't tell the full story.

#### Measuring Cluster Quality with Silhouette Score

To complement inertia, I also evaluated each clustering solution using the Silhouette Score. While inertia measures compactness, the silhouette score evaluates both:

- How similar a household is to members of its own cluster.
- How different it is from households in neighboring clusters.

The score ranges from -1 to 1. Generally:

- Close to 1 indicates well-separated clusters.
- Around 0 suggests overlapping clusters.
- Negative values indicate observations may have been assigned to the wrong cluster.

Using silhouette score alongside inertia provides a much more balanced evaluation. For example: A clustering solution might produce very low inertia simply because it uses many clusters.

However, those clusters could overlap substantially, leading to poor interpretability. Silhouette score helps prevent that problem by rewarding clusters that are both compact and well separated.

### Moving Beyond Two Dimensions

After understanding how K-Means behaved with two variables, the project expanded to a more realistic scenario involving multiple financial characteristics. Using the high-variance features identified during exploratory analysis, the clustering pipeline incorporated variables such as:

- Income
- Net worth
- Total debt
- Housing value
- Retirement assets

These features collectively provide a much richer representation of household financial health than any single variable could. Working with multiple dimensions allows the algorithm to identify patterns that would be impossible to observe in a simple two-dimensional plot.

For example, two households may have similar incomes but differ significantly in debt levels, home ownership, retirement savings, or net worth. Considering all these variables simultaneously enables K-Means to produce far more meaningful customer segments.

To streamline this process, I built a machine learning pipeline that combined:

- Feature selection
- StandardScaler for normalization
- K-Means clustering

Using a pipeline ensures that preprocessing and model training are performed consistently every time the model is retrained. This becomes especially important later in the project when users interact with the dashboard and dynamically change clustering parameters.

## Visualizing High-Dimensional Data with PCA

Although clustering was performed using multiple financial features, visualizing data in five or more dimensions isn't practical. This is where Principal Component Analysis (PCA) becomes invaluable.

PCA is a dimensionality reduction technique that transforms high-dimensional data into a smaller number of new variables called principal components while preserving as much of the original variation as possible. In this project, PCA reduced the selected financial features from five dimensions down to two principal components.

This made it possible to create an intuitive scatter plot where:

- Each point represents a household.
- Colors indicate cluster membership.
- Similar households appear close together.
- Distinct customer segments become easy to identify visually.

It's important to note that PCA was used only for visualization. The clustering itself was performed on the standardized financial features, ensuring that customer segments were based on the complete feature set rather than the reduced representation.

This distinction is important because PCA simplifies interpretation without compromising the integrity of the clustering model.

## Building an Interactive Customer Segmentation Dashboard with Dash

Instead of stopping after building the clustering model, I transformed it into a fully interactive web application using Dash, an open-source framework developed by Plotly for creating analytical web applications entirely in Python.

The result is a dashboard that allows users to experiment with different clustering configurations in real time without writing a single line of code.

### Why Dash?

There are many frameworks available for building web applications, including Flask, Django, React, and Streamlit. For this project, Dash was an ideal choice because it combines several advantages:

- Built entirely in Python, eliminating the need to write JavaScript.
- Integrates seamlessly with Plotly's interactive visualizations.
- Supports dynamic callbacks that automatically update components based on user input.
- Well suited for data science dashboards and machine learning applications.

Since the project already relied heavily on Python, Dash allowed me to build an interactive interface while keeping the entire workflow within the same programming language. This also demonstrates an important skill for data scientists: moving beyond notebooks and delivering models in a format that stakeholders can actually use.

### Designing the Dashboard

The dashboard was designed around one central idea: Give users the ability to explore how different modeling decisions affect customer segmentation. Instead of presenting a single "correct" clustering solution, the application lets users interact with the model and observe how changes influence the results.

The interface includes several connected components that update automatically whenever a user changes the dashboard settings. These components work together to create a responsive analytical experience rather than a collection of static charts.

### Feature Selection with Raw vs. Trimmed Variance

![Bar chart comparing feature selection using raw versus trimmed variance](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316901/bar_chart_j3soqd.png)

One of the dashboard's unique features is the ability to switch between raw variance and trimmed variance when selecting the most informative financial variables. This may seem like a small option, but it highlights an important concept in real-world data science.

Raw variance includes every observation, making it more sensitive to extreme outliers. Trimmed variance removes a small percentage of the highest and lowest values before calculating variance, producing a more robust estimate of variability.

Allowing users to switch between these two methods demonstrates how feature selection itself can influence the clustering process. When the variance method changes, the dashboard automatically:

- Recalculates feature rankings.
- Selects the top five financial variables.
- Retrains the K-Means model.
- Updates every visualization.

This dynamic workflow mirrors how analysts often compare multiple preprocessing strategies before settling on a final model.

### Selecting the Number of Clusters

![Interactive metrics panel showing inertia and silhouette score for different cluster counts](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316913/metrics_kmjo5g.png)

Choosing the number of clusters is one of the most important decisions in K-Means clustering. Instead of fixing this value, I added an interactive slider that allows users to select any value of K between 2 and 12.

Every time the slider changes, the application retrains the clustering model using the selected number of clusters. This provides an opportunity to observe how customer segmentation evolves as the model becomes more or less granular.

For example:

- Smaller values of K produce broader customer categories.
- Larger values create more specialized household segments.

Rather than reading about the effects of changing K, users can experience those changes instantly through the dashboard.

### Live Model Evaluation

One challenge with interactive machine learning applications is helping users determine whether a clustering solution is actually good. To address this, the dashboard displays two evaluation metrics that update in real time:

- **Inertia:** Inertia measures how closely households are grouped around their assigned cluster centroids. Lower inertia generally indicates tighter, more compact clusters. However, inertia almost always decreases as more clusters are added, making it insufficient as the sole evaluation metric.
- **Silhouette Score:** The silhouette score provides a more balanced measure of cluster quality. It evaluates both: Cluster cohesion (how similar households are within the same cluster) and Cluster separation (how distinct different clusters are). Higher silhouette scores indicate that households fit well within their assigned clusters while remaining clearly separated from neighboring groups. Displaying both metrics together allows users to make more informed decisions about the appropriate number of clusters.

### Visualizing Customer Segments with PCA

![PCA scatter plot showing customer segments projected into two dimensions](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316926/pca_scatter_essb5h.png)

High-dimensional financial data is difficult to interpret directly. Although the clustering model uses multiple standardized financial variables, humans naturally understand two-dimensional visualizations much better.

To bridge this gap, the dashboard uses Principal Component Analysis (PCA) to project household data into two dimensions. The resulting scatter plot allows users to:

- View each household as an individual point.
- Identify distinct customer segments through color-coded clusters.
- Observe how cluster boundaries change when different values of K are selected.
- Explore household distributions interactively using hover tooltips.

This visualization transforms abstract mathematical calculations into something that is immediately understandable. Instead of looking at rows of numerical data, users can literally see the hidden structure discovered by the machine learning algorithm.

### Bringing Everything Together with Dash Callbacks

One of Dash's most powerful features is its callback system. Callbacks create connections between user inputs and application outputs, allowing the dashboard to respond automatically whenever an input changes.

In this project, callbacks handle the entire machine learning workflow behind the scenes. When a user adjusts the variance method or moves the cluster slider, the application automatically:

- Selects the appropriate variance calculation.
- Identifies the top five financial features.
- Standardizes the selected variables.
- Retrains the K-Means clustering model.
- Computes updated inertia and silhouette scores.
- Applies PCA for visualization.
- Refreshes every chart and metric displayed on the dashboard.

This creates a seamless experience where users receive immediate feedback without manually rerunning notebooks or writing code. It also demonstrates how machine learning models can be integrated into interactive applications that support exploration and decision-making.

## Deploying the Dashboard on Render

Once the dashboard was complete, the final step was making it accessible online. Rather than limiting the project to a local machine, I deployed the application on Render, a cloud platform that simplifies hosting Python web applications directly from GitHub repositories.

The deployment workflow was straightforward:

- The project repository was pushed to GitHub for version control.
- Render was connected to the repository.
- Dependencies were installed automatically using the requirements.txt file.
- The application launched using the Dash entry point defined in the deployment configuration.
- Future updates could be deployed automatically whenever changes were pushed to GitHub.

Hosting the dashboard online means anyone including recruiters, hiring managers, collaborators, or fellow data science enthusiasts can explore the project through a web browser without installing Python or cloning the repository.

One consideration with Render's free tier is the cold start behavior. If the application has been inactive for a period of time, the first request may take around 30-60 seconds while the service spins up. After that initial delay, the dashboard responds smoothly and behaves like a continuously running application.

Deploying the project completes the end-to-end workflow, demonstrating not only model development but also the practical skills required to package, deploy, and share machine learning solutions in a real-world environment.

## Conclusion

This project goes far beyond implementing a single machine learning algorithm. It demonstrates the complete lifecycle of a modern data science solution—from exploring raw financial data and selecting meaningful features to building, evaluating, visualizing, and deploying an interactive application.

Along the way, I applied several core data science concepts, including:

- Exploratory Data Analysis (EDA) to understand household financial patterns and prepare the data.
- Feature selection using both raw and trimmed variance to identify the variables that best differentiate households while reducing the influence of outliers.
- K-Means clustering to uncover natural customer segments without relying on labeled data.
- StandardScaler to ensure all financial variables contributed equally during distance-based clustering.
- The Elbow Method and Silhouette Score to evaluate clustering quality and guide the selection of an appropriate number of clusters.
- Principal Component Analysis (PCA) to transform high-dimensional financial data into intuitive two-dimensional visualizations.
- Dash and Plotly to create an interactive web application where users can explore different clustering scenarios in real time.
- Render deployment to make the dashboard publicly accessible and demonstrate how machine learning models can be delivered as usable web applications.

Beyond the technical implementation, this project highlights an important principle of data science: generating value from data is not just about building models, it's about making insights accessible. By combining machine learning with interactive visualizations, the dashboard enables users to explore complex financial patterns, compare customer segments, and understand the impact of different modeling choices without needing to inspect the underlying code.

For me, this project was also an opportunity to strengthen skills that extend beyond machine learning itself, including feature engineering, model evaluation, data visualization, dashboard development, cloud deployment, and communicating analytical results effectively.`,
    featured: true,
    relatedProjectSlug: 'consumer-finance-segmentation',
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
