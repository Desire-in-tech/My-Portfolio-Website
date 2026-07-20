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
  content?: string;
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

- **INCOME** — Total household income
- **NETWORTH** — Household net worth (assets minus liabilities)
- **DEBT** — Total household debt
- **CCBAL** — Credit card balance
- **HOUSES** — Value of the primary residence
- **MRTHEL** — Mortgage debt on the primary residence
- **NFIN** — Total non-financial assets
- **RETQLIQ** — Retirement account balances
- **AGE** — Age of household head
- **EDUC** — Education level
- **NHNFIN** — Non-home non-financial assets

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
  },
  {
    id: '3',
    slug: 'stock-market-volatility-forecasting-api',
    title:
      'Machine Learning-Based Stock Market Volatility Forecasting API Using GARCH and FastAPI',
    description:
      'Built a FastAPI-powered machine learning API that forecasts stock market volatility using GARCH models, Yahoo Finance data, SQLite, and Render for cloud deployment.',
    technologies: ['Python', 'FastAPI', 'GARCH', 'Pandas', 'yfinance', 'SQLite'],
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
    content: `## Introduction

Financial markets generate massive amounts of data every day. Every stock price movement, trading volume change, and market fluctuation creates new information that investors, analysts, and financial institutions use to make decisions.

However, while predicting the exact future price of a stock is extremely challenging, understanding and forecasting market volatility is one of the most important areas in quantitative finance.

Volatility represents the degree of uncertainty or risk associated with price movements. High volatility means prices are changing rapidly and unpredictably, while low volatility indicates a more stable market environment.

Financial institutions use volatility forecasting for:

- Risk management
- Portfolio optimization
- Option pricing
- Asset allocation
- Trading strategies
- Market stress analysis

In this project, I built a machine learning-based stock market volatility forecasting API using Python, Yahoo Finance data, GARCH modeling, and FastAPI. The goal was not simply to train a model inside a notebook but to create a complete production-style machine learning system:

- Collect real financial market data
- Build a reusable data pipeline
- Store and retrieve market data
- Analyze financial time series
- Train a volatility forecasting model
- Expose predictions through an API
- Deploy the service online

The final application allows users to request volatility forecasts for different financial instruments through an API endpoint. The project combines several important engineering and data science concepts:

- Financial time series analysis
- Statistical machine learning
- Data engineering
- Test-driven development
- Backend API development
- Model deployment
- Cloud hosting

## Project Overview

The project is a FastAPI service for forecasting stock market volatility using a GARCH model trained on Yahoo Finance market data.

The application supports:

- Fetching historical stock data
- Calculating daily returns
- Training a GARCH volatility model
- Saving trained models
- Generating future volatility forecasts
- Serving predictions through REST API endpoints

The project architecture follows a production-oriented structure:

\`\`\`
stock-market-volatility-forecasting/
├── src/
│   ├── data.py
│   ├── model.py
│   └── main.py
├── database/
├── models/
├── notebooks/
├── tests/
├── requirements.txt
├── requirements-dev.txt
├── render.yaml
└── README.md
\`\`\`

Each component has a specific responsibility.

## Why Forecast Stock Market Volatility?

Before discussing the technical implementation, it is important to understand why volatility forecasting matters. Many beginners entering financial machine learning start by asking:

"Can we predict tomorrow's stock price?"

Although this sounds attractive, stock prices are influenced by countless unpredictable factors:

- Economic conditions
- Investor psychology
- Company announcements
- Interest rates
- Political events
- Global crises
- Market sentiment

Because markets are influenced by complex human behavior, accurately predicting exact prices is extremely difficult. Instead, financial professionals often focus on a more measurable question:

"How risky will the market be in the future?" This is where volatility forecasting becomes valuable.

## Understanding Market Volatility

Volatility measures how much the price of an asset fluctuates over time. A stock that moves between $90 and $110 every day has higher volatility than a stock that consistently moves between $98 and $102.

Mathematically, volatility is commonly measured using the standard deviation of returns. Stock prices themselves are usually not used directly for financial modeling because prices are usually:

- Non-stationary
- Trending over time
- Difficult to compare across assets

Instead, analysts use returns.

## Calculating Stock Returns

Daily returns measure how much an asset changed from one day to the next.

The simple return formula is:

\`\`\`
R_t = (P_t - P_{t-1}) / P_{t-1}
\`\`\`

Where:

- **R_t** = return on day t
- **P_t** = current day's closing price
- **P_{t-1}** = previous day's closing price

## Data Collection Using Yahoo Finance

The first stage of the project was collecting financial market data. The application uses Yahoo Finance through the yfinance Python library to retrieve historical prices.

Examples of supported symbols include:

- **^BSESN** — BSE Sensex
- **^NSEI** — NSE Nifty 50
- **RELIANCE.NS** — Reliance Industries
- **TCS.NS** — Tata Consultancy Services
- **INFY.NS** — Infosys
- **HDFCBANK.NS** — HDFC Bank

The data pipeline retrieves information such as:

- Open price
- High price
- Low price
- Closing price
- Adjusted close price
- Trading volume

## Data Exploration and Cleaning

Raw financial data cannot immediately be used for modeling. The first notebook focused on:

- Understanding dataset structure
- Checking missing values
- Reviewing data types
- Cleaning column names
- Converting timestamps
- Calculating returns

### Building a Reusable Data Function

Instead of writing data collection code repeatedly, the project created a reusable function: \`get_stock_data()\`. The purpose of this function is to accept a stock ticker, download market data, clean the dataset, calculate returns, and return a modeling-ready dataframe.

Creating reusable components is an important software engineering practice because it improves:

- Maintainability
- Testing
- Code reuse
- Scalability

## Building the Data Pipeline for Stock Market Volatility Forecasting

### Designing a Reliable Financial Data Pipeline

A machine learning model is only as good as the data it receives. In financial applications, this principle becomes even more important because market data has unique challenges:

- Large volumes of historical observations
- Missing trading days
- Market-specific behaviors
- Changing market conditions
- Time-dependent relationships

For this project, the goal was not only to download stock prices but to create a reusable data pipeline that could support the complete machine learning workflow. The pipeline follows the standard ETL process: Extract → Transform → Load.

- **Extract:** Collect historical market data from Yahoo Finance.
- **Transform:** Clean the raw data and convert it into a format suitable for volatility modeling.
- **Load:** Store processed data in a database for future retrieval.

This approach mirrors how real-world financial data systems operate.

### Understanding the Data Architecture

The project separates responsibilities into different modules:

\`\`\`
src/
├── data.py
├── model.py
└── main.py
\`\`\`

The \`data.py\` module handles everything related to data. Its responsibilities include:

- Connecting to Yahoo Finance
- Downloading stock data
- Cleaning market information
- Calculating returns
- Managing database storage

This separation creates a clear boundary between:

- Data engineering
- Machine learning
- API development

A common mistake in beginner machine learning projects is putting everything into one notebook. While notebooks are excellent for experimentation, production systems require:

- Organized code
- Reusable functions
- Testing
- Clear architecture

### The Data Extraction Process

The first step is retrieving historical market data. The project uses \`yfinance\` which provides access to Yahoo Finance market information.

Example:

\`\`\`python
import yfinance as yf

stock_data = yf.download(
    ticker,
    start=start_date,
    end=end_date
)
\`\`\`

The function retrieves historical price information including:

- Opening price
- Highest price
- Lowest price
- Closing price
- Adjusted closing price
- Trading volume

### Data Transformation

Raw market data cannot directly be passed into a GARCH model. The data must first be transformed. The transformation process includes: cleaning column names, handling missing values, data type conversion, and creating daily returns.

### Building the SQLite Data Repository

After collecting and transforming market data, the next challenge is storage. The project uses SQLite as the initial database solution.

SQLite was selected because it provides:

- Lightweight storage
- No external database server required
- Easy local development
- Simple integration with Python

### Why Store Market Data?

At first glance, downloading data every time may seem easier. However, storing data provides several advantages:

- **Faster Model Training:** Instead of downloading thousands of observations repeatedly, the model can directly access stored information.
- **Reproducibility:** Machine learning experiments require consistent datasets. If the model is trained today and retrained tomorrow using slightly different data, results may change.
- **Reduced Dependency on External APIs:** External services can experience downtime, rate limits, and API changes.

### Understanding SQLRepository

The project implements a repository pattern through \`SQLRepository\`. The repository handles database operations such as:

- Creating tables
- Inserting stock data
- Retrieving historical observations

Instead of spreading SQL commands throughout the application, database logic stays inside one dedicated component.

## Test-Driven Development (TDD)

A major engineering aspect of this project was implementing tests alongside development. The project includes \`tests/\` which verifies that the data pipeline works correctly.

Test-driven development follows the cycle:

1. Write Test
2. Write Code
3. Run Tests
4. Improve Implementation

Instead of writing code first and hoping it works, developers define expected behavior beforehand.

### Why TDD Matters in Machine Learning Projects

Many machine learning projects fail because the focus is only on model accuracy. However, production ML systems require reliability. A model can fail because:

- Data extraction breaks
- Database queries return incorrect results
- API inputs are invalid
- Model files are missing

Testing helps catch these problems early.

## Building the GARCH Volatility Forecasting Model

### Understanding Financial Volatility Modeling

After building the data pipeline, the next challenge was developing a model capable of forecasting future market volatility. Unlike traditional machine learning problems where we predict outcomes such as customer churn, fraud transactions, sentiment categories, and sales values, financial forecasting has a unique challenge: the behavior of markets changes over time.

A stock market may experience:

- Periods of stability with small daily movements
- Periods of uncertainty with extreme price changes
- Sudden volatility spikes caused by external events

A successful volatility model must understand these changing risk patterns. This is where GARCH modeling becomes valuable.

### The Problem with Traditional Models

Traditional statistical models often assume that:

- Data variance remains constant
- Market risk does not change
- Past volatility has limited influence

However, financial markets violate these assumptions. Market volatility changes over time. A period of calm trading can suddenly transition into extreme uncertainty.

Therefore, we need a model that can capture:

- Changing variance
- Volatility persistence
- Market shocks

### Introduction to ARCH Models

Before GARCH, researchers developed the Autoregressive Conditional Heteroskedasticity (ARCH) model.

The key idea behind ARCH: today's volatility depends on previous errors in the market. In simple terms: if yesterday's market movement was unusually large, tomorrow may also experience increased volatility.

The ARCH model introduced the concept of conditional variance — where instead of assuming variance is constant, the model allows variance to change based on historical information.

### Limitations of ARCH

Although ARCH was an important breakthrough, it had limitations. A higher-order ARCH model requires many previous observations. For example, an ARCH(20) model would require 20 previous squared returns.

This creates more parameters, higher complexity, and less efficient estimation. To solve this problem, the GARCH model was introduced.

### What Is a GARCH Model?

GARCH stands for Generalized Autoregressive Conditional Heteroskedasticity.

It extends ARCH by including previous volatility estimates. The model captures:

- Previous market shocks
- Previous volatility levels

The general GARCH(p,q) equation is:

\`\`\`
σ²_t = ω + α·ε²_{t-1} + β·σ²_{t-1}
\`\`\`

Where:

- **σ²_t** — The current volatility estimate.
- **ω (omega)** — The long-term average volatility level.
- **α (alpha)** — Measures the impact of recent market shocks.
- **β (beta)** — Measures volatility persistence.

### Understanding GARCH(p,q)

The project uses GARCH(1,1). This is one of the most widely used configurations in financial modeling. The parameters mean:

- **p = 1** — Use one previous squared return. The model considers the previous market shock.
- **q = 1** — Use one previous volatility estimate. The model considers previous volatility behavior.

The model essentially asks:

"How much should today's volatility depend on yesterday's market shock and yesterday's volatility?"

### Why GARCH Was Chosen for This Project

For stock market volatility forecasting, GARCH provides several advantages:

- **Designed for Financial Data:** Unlike many general machine learning algorithms, GARCH was specifically created for time-series volatility modeling.
- **Captures Volatility Clustering:** The model recognizes that high volatility follows high volatility and low volatility follows low volatility.
- **Interpretable:** The parameters have financial meaning. Analysts can understand market shock impact, volatility persistence, and long-term risk.
- **Works with Limited Data:** Deep learning models often require enormous datasets. GARCH can perform effectively using historical financial observations.

### Training the GARCH Model

The project uses the Python \`arch\` library. The workflow:

1. Historical Data
2. Daily Returns
3. GARCH Model
4. Fit Parameters
5. Forecast Volatility

The training process estimates:

- Long-term volatility
- Market shock influence
- Volatility persistence

### Evaluating the Model

Training a model is only one step. The next question: how well does the model represent the data?

The project evaluates the model using:

- **AIC (Akaike Information Criterion):** AIC measures model quality while penalizing unnecessary complexity. Lower AIC values indicate better models.
- **BIC (Bayesian Information Criterion):** BIC works similarly but applies a stronger penalty for complexity. It helps avoid overfitting.
- **Residual Diagnostics:** After fitting the model, we analyze residuals. Residuals represent actual return minus model predicted return. A good model should leave behind random residuals, no obvious patterns, and no remaining volatility structure. If residuals still show patterns, the model may not capture all market behavior.

### Saving the Trained Model

Once trained, the model can be saved using \`joblib\`.

Example:

\`\`\`python
joblib.dump(
    model,
    "models/garch_model.pkl"
)
\`\`\`

The saved model allows the API to reuse the trained model without retraining every time. This improves:

- Response speed
- Resource usage
- Production reliability

## Deploying the GARCH Volatility Forecasting Model with FastAPI

### From Machine Learning Model to Production API

Building a machine learning model is only one part of creating a real-world machine learning application. A model sitting inside a notebook cannot directly help users, businesses, or other applications.

To make a machine learning solution useful, it needs a way for external systems to communicate with it. This requires turning the model into a service.

For this project, the trained GARCH volatility forecasting model was transformed into a production-style API using FastAPI. FastAPI allows developers to expose machine learning functionality through HTTP endpoints, making the model accessible to web applications, mobile applications, data dashboards, trading platforms, and automated analysis systems.

### Why FastAPI for Machine Learning Deployment?

FastAPI has become one of the most popular frameworks for deploying Python machine learning applications. It provides several advantages:

- High Performance
- Automatic Documentation
- Data Validation

### Understanding the FastAPI Application Structure

The API is implemented inside \`src/main.py\`. The application contains:

- API routes
- Request schemas
- Response schemas
- Model loading logic
- Error handling

## Deploying the Stock Market Volatility Forecasting API and Engineering Lessons Learned

### Moving From Local Development to Cloud Deployment

One of the most important stages of any machine learning project is moving beyond local development. A model that only runs on a personal computer is useful for experimentation, but it does not provide value to real users.

The goal of this project was to create a complete machine learning application that could:

- Collect financial data
- Train a volatility model
- Generate predictions
- Serve predictions through an API
- Run reliably in a cloud environment

The final application was deployed using Render. Render provides a simple platform for deploying:

- Python applications
- APIs
- Web services
- Databases

The deployment process transformed the local FastAPI application into an accessible online service.

### Render Deployment Configuration

The project includes \`render.yaml\`. This allows deployment configuration to be defined as code. The configuration specifies:

- **Build Command:** \`pip install -r requirements.txt\` — This installs all runtime dependencies.
- **Start Command:** \`uvicorn main:app --app-dir src --host 0.0.0.0 --port $PORT\` — This launches the FastAPI server.
- **Python Version Management:** The project pins Python using \`.python-version\` with 3.11.11.

### Challenges Encountered During Development

Building this project involved several engineering challenges. These challenges provided valuable lessons about developing real machine learning systems.

- Financial Data Complexity
- Understanding the Right Prediction Target
- Connecting Machine Learning With Software Engineering
- Managing Model Files in Cloud Environments
- Balancing Simplicity and Production Readiness

## Future Improvements

Although this project provides a complete end-to-end machine learning service, several improvements could make it more advanced.

- Add More Forecasting Models like EGARCH, LSTM Networks, and Transformer-Based Models
- Add More Market Features
- Build a Frontend Dashboard
- Add Model Monitoring
- Containerization with Docker

## Final Thoughts

The Stock Market Volatility Forecasting API demonstrates how machine learning can be transformed from an experimental notebook into a functional software product. The project combines:

- Financial data analysis
- Statistical modeling
- Backend development
- API design
- Cloud deployment

The most important lesson is that successful machine learning applications require more than choosing an algorithm. A complete ML system needs:

- Reliable data pipelines
- Appropriate modeling techniques
- Software engineering practices
- Testing and validation
- Production deployment strategies

This project represents the transition from a data science experiment into a deployable machine learning application capable of providing real-world value.

## Project Links

- **GitHub Repository:** https://github.com/Desire-in-tech/stock-market-volatility-forecasting
- **Live Demo:** https://stock-market-volatility-forecasting.onrender.com

### Technologies Used

- Python
- Pandas
- NumPy
- yfinance
- ARCH/GARCH
- FastAPI
- SQLite
- Joblib
- Pytest
- Render`,
  },
  {
    id: '4',
    slug: 'nlp-sentiment-analysis',
    title:
      'Building an NLP Sentiment Analysis System with Machine Learning and BERT: From Customer Reviews to Business Intelligence',
    description:
      'Built an NLP sentiment analysis system using TF-IDF, Logistic Regression, Random Forest, Naive Bayes, and DistilBERT to classify reviews and generate actionable customer insights.',
    technologies: ['Python', 'Scikit-Learn', 'DistilBERT', 'TF-IDF', 'SHAP', 'NLTK'],
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
    content: `## Introduction

Every day, millions of customers leave reviews on platforms like Amazon, Google, Yelp, IMDb, and social media. These reviews contain valuable insights about customer experiences, product quality, and brand perception. However, manually reading thousands or even millions of reviews is impractical, expensive, and too slow for businesses that need to respond quickly.

This is where Natural Language Processing (NLP) and Machine Learning (ML) become invaluable. Instead of relying on human teams to sift through endless customer feedback, organizations can build intelligent systems capable of automatically determining whether a review expresses a positive or negative sentiment. These systems can identify dissatisfied customers in real time, monitor public opinion, uncover recurring issues, and support data-driven business decisions.

In this project, I developed and evaluated multiple NLP models to automatically classify movie reviews as either positive or negative. Starting with traditional machine learning algorithms powered by TF-IDF features, I compared their performance before exploring a transformer-based model, DistilBERT, to demonstrate the growing capabilities of modern language models.

Beyond simply building classification models, this project focuses on understanding why models make certain predictions. Through feature importance analysis, SHAP explainability, and error analysis, the project highlights the importance of creating machine learning solutions that are not only accurate but also transparent and interpretable.

Whether you're interested in machine learning, NLP, or real-world AI applications, this project demonstrates how customer feedback can be transformed into actionable business intelligence.

## The Business Problem

Customer reviews have become one of the most influential factors affecting purchasing decisions and brand reputation. Before buying a product, booking a hotel, watching a movie, or choosing a restaurant, most consumers read reviews written by previous customers. Businesses therefore receive an enormous volume of textual feedback every day through websites, mobile applications, surveys, customer support platforms, and social media.

While this feedback is incredibly valuable, manually analyzing it presents several challenges:

- Reading thousands of reviews requires significant time and human resources.
- Manual analysis is inconsistent because different people may interpret sentiment differently.
- Businesses cannot respond quickly enough to emerging issues.
- Hidden patterns across large datasets are often overlooked.
- Important customer concerns may remain unnoticed until they become widespread problems.

Imagine an e-commerce platform receiving 100,000 product reviews every week. Even with a dedicated customer experience team, reviewing every comment individually would be nearly impossible. As a result, businesses risk:

- Missing early signs of declining customer satisfaction.
- Delayed responses to product defects or service issues.
- Reduced customer loyalty.
- Damage to brand reputation.
- Lost revenue due to unresolved customer complaints.

An automated sentiment analysis system addresses these challenges by continuously processing incoming reviews and categorizing them based on their emotional tone. Instead of manually reading every review, businesses can immediately identify negative feedback, prioritize urgent issues, and gain a comprehensive understanding of customer satisfaction at scale.

## What is NLP Sentiment Analysis?

Sentiment Analysis, sometimes called Opinion Mining, is a Natural Language Processing (NLP) task that determines the emotional tone expressed within a piece of text. Its primary objective is to classify text into categories such as:

- Positive
- Negative
- Neutral (in multi-class problems)

Unlike structured datasets containing numerical values, sentiment analysis works with unstructured text, which introduces additional complexity. Humans naturally understand sarcasm, slang, abbreviations, spelling mistakes, and contextual meanings. Computers, however, cannot interpret language in the same way unless text is first converted into numerical representations that machine learning models can process.

This challenge makes sentiment analysis one of the most fascinating and impactful applications of NLP.

## Why Businesses Need Sentiment Analysis

Although this project uses the IMDb Movie Review Dataset, the techniques demonstrated extend far beyond movie reviews. Nearly every industry can benefit from automated sentiment analysis.

Some common applications include:

- E-commerce
- Customer Support
- Social Media Monitoring
- Market Research
- Entertainment Platforms
- Financial Services

## Dataset Overview

This project uses the IMDb Movie Review Dataset, one of the most widely recognized benchmark datasets for sentiment analysis research. The dataset contains 50,000 movie reviews, each manually labeled according to its overall sentiment.

Its balanced nature makes it an excellent dataset for evaluating binary text classification models.

### Dataset Characteristics

- Total Reviews: 50,000
- Classes: Positive and Negative
- Distribution: Balanced (50% positive, 50% negative)
- Data Type: Unstructured text
- Domain: Movie reviews

Because the dataset is balanced, the models are not biased toward predicting one class more frequently than the other. This allows evaluation metrics such as Accuracy, Precision, Recall, and F1-Score to provide meaningful comparisons between different algorithms.

Each review consists of free-form text, meaning the model must learn patterns directly from language rather than relying on predefined numerical features.

This makes preprocessing and feature engineering particularly important components of the machine learning pipeline.

## Project Objectives

The primary objective of this project is to develop an automated NLP system capable of accurately classifying customer sentiment while also providing meaningful business insights from textual feedback.

To achieve this, the project follows a complete end-to-end machine learning workflow:

- Clean and Preprocess Raw Text
- Explore Text Patterns
- Transform Text into Numerical Features
- Train Multiple Machine Learning Models
- Evaluate Model Performance
- Interpret Model Decisions
- Generate Actionable Business Insights

## Data Preprocessing: Turning Raw Text into Machine Learning Features

One of the biggest challenges in Natural Language Processing (NLP) is that computers do not understand language the way humans do. When we read a movie review like "I absolutely loved this movie! The acting was fantastic and the storyline kept me engaged from start to finish.", we instantly recognize it as expressing positive sentiment. We understand the meaning of words, the context of the sentence, and the emotion behind it.

A machine learning model, however, sees nothing more than a sequence of characters. Before any model can learn from text, the data must be cleaned, standardized, and converted into a numerical format that algorithms can process. This stage known as text preprocessing is one of the most important steps in any NLP pipeline. Even the most advanced models can produce poor results if they are trained on noisy or inconsistent data.

For this project, I applied a preprocessing pipeline designed to remove unnecessary information while preserving the words that carry meaningful sentiment:

- Text Cleaning
- Removing Stopwords
- Lemmatization

### Why Preprocessing Matters

Every preprocessing step contributes to better model performance. Instead of learning from thousands of noisy, duplicated, or irrelevant words, the model learns from cleaner and more meaningful features.

The benefits include:

- smaller vocabulary
- reduced memory usage
- faster training
- improved generalization
- better prediction accuracy

In many NLP projects, thoughtful preprocessing can improve performance as much as selecting a more sophisticated algorithm.

## Exploratory Data Analysis (EDA)

Before building predictive models, it is essential to understand the dataset. Exploratory Data Analysis (EDA) helps uncover patterns, identify anomalies, and generate insights that guide the rest of the machine learning pipeline.

Rather than jumping straight into model training, EDA allows us to answer questions such as:

- Is the dataset balanced?
- How long are typical reviews?
- Which words occur most frequently?
- Are there meaningful differences between positive and negative reviews?
- Are there hidden patterns that may influence model performance?

Understanding the data first often leads to better feature engineering and more reliable models.

### Sentiment Distribution

The first visualization examined the distribution of sentiment labels within the dataset. Fortunately, the IMDb dataset is perfectly balanced, containing an equal number of positive and negative reviews.

![Bar chart showing the balanced distribution of positive and negative sentiment labels](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317177/sentiment_distribution_aggnlm.png)

### Review Length Distribution

Not every customer expresses their opinion with the same level of detail. Some reviews are only a few words long: "Fantastic movie." Others span several paragraphs, discussing acting, cinematography, pacing, and character development.

To better understand these differences, I analyzed the distribution of review lengths. The visualization revealed that:

- most reviews fall within a typical length range
- some reviews are significantly longer
- extremely short reviews are relatively uncommon

Understanding review length is valuable because extremely long documents may require truncation for transformer models such as BERT, while very short reviews often contain fewer features for traditional machine learning algorithms. It also provides insight into how expressive customers tend to be when sharing feedback.

![Histogram showing the distribution of review lengths across the dataset](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317163/review_length_distribution_y7nry2.png)

### Most Common Words

![Bar chart showing the most frequently occurring words after preprocessing](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317065/common_words_rlzvpf.png)

One of the simplest yet most informative analyses in NLP is examining the most frequently occurring words. After preprocessing, I identified the words that appeared most often across the dataset.

Frequently occurring positive terms included words associated with quality, enjoyment, and recommendation. Negative reviews, on the other hand, were dominated by words expressing disappointment, frustration, or poor experiences.

Although frequency alone does not determine sentiment, it provides an early indication of the vocabulary the models will learn from. This analysis also validates whether preprocessing successfully removed irrelevant words while retaining meaningful language.

### Word Clouds

![Word cloud of the most frequent terms in positive reviews](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317150/positive_wordcloud_ahmv1t.png)

![Word cloud of the most frequent terms in negative reviews](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317125/negative_wordcloud_n5nl0l.png)

To complement the frequency analysis, I generated separate word clouds for positive and negative reviews. A word cloud is a visual representation in which the size of each word corresponds to how frequently it appears. Large words indicate higher frequency, making dominant themes immediately visible.

These visualizations provided an intuitive overview of customer language before any machine learning models were trained. While word clouds are primarily exploratory rather than predictive, they offer valuable insight into how customers naturally express satisfaction or dissatisfaction.

### N-gram Analysis

![Bar chart showing the most frequent bigrams and trigrams in positive and negative reviews](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317137/ngram_analysis_kqzn5z.png)

Individual words are informative, but sentiment is often conveyed through combinations of words rather than isolated terms. Consider these examples: not good, waste time, highly recommend, and worth watching.

Looking at single words alone may miss these important expressions. To capture these patterns, I performed n-gram analysis. An n-gram is a sequence of consecutive words. Analyzing common bigrams and trigrams revealed phrases that frequently appeared in positive and negative reviews.

For example:

Positive expressions included phrases such as:

- highly recommend
- worth watching
- excellent acting

Negative expressions commonly included:

- waste time
- poor acting
- not worth

These multi-word patterns often provide stronger predictive signals than individual words because they preserve more context.

## Feature Engineering with TF-IDF

Once the text has been cleaned and explored, the next challenge is transforming language into numbers. Machine learning algorithms work with numerical data — they cannot interpret raw text directly. This process of converting text into meaningful numerical representations is known as feature engineering.

For traditional NLP models, one of the most widely used techniques is Term Frequency–Inverse Document Frequency (TF-IDF). TF-IDF measures not only how often a word appears in a document but also how important that word is across the entire dataset.

### Visualizing High-Dimensional Text with t-SNE

![t-SNE projection of TF-IDF vectors showing separation between positive and negative reviews](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317204/tsne_visualization_jyryv3.png)

After transforming reviews into TF-IDF vectors, each review is represented by thousands of numerical features. While this rich representation is excellent for machine learning, it is impossible for humans to visualize data in such high-dimensional space.

To gain intuition about the structure of the dataset, I applied t-Distributed Stochastic Neighbor Embedding (t-SNE), a dimensionality reduction technique that projects high-dimensional data into two dimensions while preserving local relationships between similar observations.

The resulting visualization provided a two-dimensional map of the reviews, making it easier to observe how positive and negative sentiments cluster in feature space. Although some overlap remained — as expected with natural language — the visualization showed meaningful separation between many positive and negative reviews. This suggests that the TF-IDF representation successfully captured patterns that machine learning algorithms could leverage for classification.

It's important to note that t-SNE is not used for training the models. Instead, it serves as an exploratory visualization tool that helps us better understand the structure of complex text data and assess whether meaningful sentiment patterns exist before model development.

## Building and Evaluating Machine Learning Models

With the text cleaned, explored, and transformed into numerical features using TF-IDF, the next step is to train machine learning models capable of predicting whether a review expresses positive or negative sentiment.

Rather than relying on a single algorithm, I evaluated multiple approaches to compare their performance, interpretability, and suitability for real-world deployment. This provides a more comprehensive understanding of the trade-offs between traditional machine learning techniques and modern deep learning models.

The models evaluated in this project include:

- Logistic Regression
- Naive Bayes
- Random Forest
- DistilBERT (Transformer Model)

Each model approaches the classification task differently, offering unique strengths and limitations.

### Logistic Regression

Despite its name, Logistic Regression is a classification algorithm rather than a regression algorithm. It predicts the probability that a review belongs to a particular class — in this case, positive or negative sentiment.

Instead of producing any numerical value, the model outputs a probability between 0 and 1.

For example:

- "Absolutely fantastic movie!" → Probability (Positive): 0.98 → Prediction: Positive
- "I regret watching this film." → Probability (Positive): 0.03 → Prediction: Negative

The model learns how strongly each word contributes to either positive or negative sentiment.

One reason Logistic Regression remains one of the most popular NLP algorithms is its simplicity and interpretability. Unlike more complex models, it is relatively easy to understand why it makes a particular prediction by examining the weights assigned to individual features.

### Naive Bayes

The second model evaluated was Multinomial Naive Bayes, one of the oldest and most widely used algorithms in text classification. Naive Bayes is based on Bayes' Theorem, a statistical principle that calculates the probability of an event given prior knowledge.

The "naive" assumption is that every feature (word) contributes independently to the prediction.

Although this assumption is rarely true in natural language, Naive Bayes performs surprisingly well because word frequencies often provide enough information for effective classification. For example, consider the review:

"Excellent acting and amazing story."

The model estimates the probability that this review belongs to each sentiment class based on how frequently words such as excellent, acting, amazing, and story appear in positive and negative reviews during training.

The class with the highest probability becomes the prediction.

### Random Forest

The third model evaluated was Random Forest, an ensemble learning algorithm. Instead of relying on a single decision tree, Random Forest combines the predictions of many decision trees to produce a final decision.

The basic idea is simple: Rather than asking one expert to classify a review, imagine asking hundreds of experts independently and choosing the majority opinion.

Each decision tree learns slightly different patterns because it is trained using different subsets of the data and features. Combining these independent predictions generally improves robustness and reduces overfitting.

For sentiment analysis, Random Forest examines combinations of TF-IDF features to identify patterns associated with positive and negative reviews.

### Why Compare Multiple Models?

![Bar chart comparing the accuracy of Logistic Regression, Random Forest, Naive Bayes, and DistilBERT](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317113/model_comparison_mn26qe.png)

Comparing multiple algorithms provides valuable insight into how different learning strategies perform on the same problem. No single algorithm is universally best.

Performance depends on:

- the dataset
- feature engineering
- computational resources
- interpretability requirements
- deployment constraints

By evaluating several models, we can make informed decisions about which approach best balances accuracy, efficiency, and business needs. In this project, Logistic Regression clearly emerged as the strongest traditional machine learning model.

## Moving Beyond Traditional Machine Learning

Traditional machine learning models rely heavily on manually engineered features such as TF-IDF. While highly effective, these approaches have an important limitation: They treat words largely as independent features and struggle to understand context.

Consider these sentences:

- "The movie was good."
- "The movie was not good."

The difference between these reviews is only one word, yet their meanings are completely opposite. Traditional models often struggle with such contextual relationships because they primarily focus on word frequencies rather than the meaning created by word order and surrounding context. This challenge motivated the development of transformer models, which revolutionized Natural Language Processing.

## DistilBERT: Understanding Language Through Context

To explore modern NLP techniques, I evaluated DistilBERT, a lightweight version of Google's Bidirectional Encoder Representations from Transformers (BERT). Unlike TF-IDF-based models, DistilBERT does not rely on manually engineered features. Instead, it learns language representations directly from text.

This enables it to understand:

- word order
- sentence structure
- context
- semantic meaning
- relationships between words

### Why Transformer Models Matter

Transformer architectures have transformed NLP because they excel at capturing relationships that traditional models often miss. They perform especially well when analyzing:

- sarcasm
- irony
- negation
- long-range dependencies
- nuanced emotional language

For example: "I expected this movie to be terrible, but it turned out to be amazing."

Traditional models may assign significant weight to the word terrible, whereas DistilBERT can recognize that the overall sentiment is positive because it understands how the sentence unfolds. This ability to capture context is why transformer models dominate many modern NLP benchmarks.

### DistilBERT Performance

For this project, DistilBERT was evaluated on a sample of the dataset.

- Accuracy: 80.9%

At first glance, this appears lower than Logistic Regression. However, this result should be interpreted carefully. Unlike the traditional models, DistilBERT was not fully fine-tuned on the entire dataset. Transformer models typically require:

- larger computational resources
- GPUs
- longer training times
- careful hyperparameter tuning

With full fine-tuning on the complete IMDb dataset, DistilBERT would likely achieve significantly higher performance and better capture subtle linguistic patterns that traditional models struggle to recognize. Its lower sample accuracy therefore reflects the evaluation setup rather than the inherent capability of transformer architectures.

## Comparing Model Performance

The results demonstrate that different algorithms excel for different reasons.

- **Logistic Regression** — Accuracy: 89.07%
- **Random Forest** — Accuracy: 85.55%
- **Naive Bayes** — Accuracy: 85.44%
- **DistilBERT (Sample Evaluation)** — Accuracy: 80.90%

Several important observations emerge from these results.

First, feature engineering remains incredibly powerful. TF-IDF combined with Logistic Regression produced the highest accuracy among the evaluated models while remaining computationally efficient and highly interpretable.

Second, more complex algorithms do not automatically guarantee better performance. Although Random Forest is considerably more sophisticated than Logistic Regression, it performed slightly worse on this particular text classification task.

Finally, transformer models should be viewed as a long-term investment. While they require more computational resources, their ability to understand language context makes them particularly valuable for applications involving sarcasm, ambiguity, mixed sentiment, and conversational text.

## Making Machine Learning Explainable

One of the biggest criticisms of machine learning is that models often behave like "black boxes." A model may correctly classify thousands of reviews, but if we cannot explain why it made a particular prediction, it becomes difficult to trust its decisions — especially in business environments where transparency is essential.

Imagine a customer support manager asking: "Why was this review classified as negative?" If the only answer is "because the model said so," confidence in the system quickly erodes.

Modern machine learning isn't just about building accurate models; it's also about building explainable models. Understanding which words influence predictions helps validate model behavior, uncover potential biases, and build trust among stakeholders.

To address this, I used two complementary explainability techniques:

- Important Words Analysis
- SHAP (SHapley Additive exPlanations)

Together, these methods provide valuable insight into how the Logistic Regression model arrives at its predictions.

### Important Words Analysis

![Bar chart showing the words with the strongest positive and negative coefficients in the Logistic Regression model](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317097/important_words_sj3l0h.png)

One advantage of Logistic Regression is that it assigns a numerical weight (or coefficient) to every feature — in this case, each word represented by the TF-IDF vector. These coefficients indicate how strongly a word influences the predicted sentiment.

Words with large positive coefficients push predictions toward the positive class, while words with large negative coefficients push them toward the negative class. For example, the model identified words such as:

- Positive indicators: great, excellent, amazing, wonderful, and love. These words consistently increased the likelihood that a review would be classified as positive.
- Negative indicators: worst, waste, boring, terrible, and poor strongly influenced the model toward negative predictions.

This analysis serves two important purposes. First, it confirms that the model has learned meaningful language patterns rather than relying on irrelevant features. Second, it provides business stakeholders with interpretable evidence that aligns with human intuition. Seeing words like excellent and worst emerge as strong predictors reinforces confidence that the model is making sensible decisions.

### Understanding SHAP

While feature coefficients provide a global view of model behavior, they don't explain individual predictions. This is where SHAP (SHapley Additive exPlanations) becomes invaluable.

SHAP is based on concepts from cooperative game theory. It treats each feature (word) as a "player" contributing to the model's final prediction and assigns a value representing how much that feature influenced the outcome.

In simpler terms, SHAP answers questions such as:

- Which words made this review positive?
- Which words pushed the prediction toward negative?
- How much did each word contribute?

Instead of viewing the model as a mysterious black box, SHAP opens it up and reveals the reasoning behind each prediction.

### SHAP Summary Plot

![SHAP summary plot ranking the most influential features for the sentiment model](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317191/shap_summary_ganzcf.png)

To understand the model's overall behavior, I generated a SHAP Summary Plot. This visualization ranks features according to their overall importance while showing whether they push predictions toward positive or negative sentiment.

The plot revealed that:

- strongly positive words consistently increased positive predictions
- strongly negative words consistently increased negative predictions
- many words had little influence because they appeared across both sentiment classes

The SHAP analysis closely aligned with the Important Words Analysis, further validating that the Logistic Regression model learned meaningful sentiment patterns rather than random correlations. More importantly, it demonstrated that the model's decisions are explainable, making it easier for businesses to trust and deploy the solution.

## Business Insights

Although this project focuses on movie reviews, the underlying techniques are broadly applicable across industries that rely on customer feedback. Several key business insights emerged from the analysis.

- **Automated sentiment analysis is practical and reliable:** The strong performance achieved by the Logistic Regression model demonstrates that organizations can accurately classify large volumes of customer feedback without relying on manual review.
- **Traditional machine learning remains highly competitive:** There is often a misconception that advanced deep learning models always outperform simpler algorithms. This project shows that well-engineered TF-IDF features combined with Logistic Regression can deliver outstanding performance while requiring far fewer computational resources. For many organizations, this balance of accuracy, speed, and interpretability makes traditional machine learning an excellent production choice.
- **Explainability builds trust:** Understanding why a model makes predictions is just as important as achieving high accuracy. Feature importance analysis and SHAP explanations provide transparency that helps stakeholders validate model behavior and confidently integrate AI into business processes.
- **Customer feedback contains strategic intelligence:** Negative reviews do more than identify dissatisfied customers. They reveal recurring product issues, usability concerns, service gaps, and unmet customer expectations. Likewise, positive reviews highlight strengths that marketing teams can emphasize and product teams can preserve. Viewed collectively, customer reviews become a continuous source of market intelligence rather than isolated comments.

## Business Recommendations

Based on the findings of this project, several practical recommendations emerge for organizations seeking to leverage sentiment analysis.

- **Automate Sentiment Monitoring:** Deploy a sentiment analysis pipeline that continuously processes incoming customer reviews in real time. Automated monitoring significantly reduces manual effort while enabling businesses to track customer satisfaction at scale.
- **Prioritize Negative Reviews:** Configure the system to automatically flag highly negative reviews for immediate investigation. Rapid responses to dissatisfied customers can improve customer retention, strengthen brand reputation, and prevent minor issues from escalating into larger problems.
- **Use Customer Language to Guide Improvement:** Analyze recurring positive and negative words, phrases, and n-grams to identify common themes in customer feedback. For example, repeated phrases such as "waste time" or "poor customer service" highlight clear opportunities for product or service improvements. Similarly, frequently occurring positive expressions can inform marketing campaigns by emphasizing the features customers value most.
- **Deploy Logistic Regression as an Initial Production Model:** For organizations seeking an efficient and reliable solution, Logistic Regression with TF-IDF provides an excellent starting point. Its advantages include high classification accuracy, low computational cost, rapid inference, straightforward implementation, and strong interpretability. These qualities make it particularly suitable for organizations processing large volumes of customer feedback in real time.
- **Explore Transformer Models for Long-Term Growth:** While traditional machine learning provides an effective baseline, organizations should continue exploring transformer architectures such as BERT and DistilBERT. With sufficient computational resources and full fine-tuning, these models can better capture nuanced language, sarcasm, and complex contextual relationships, offering the potential for even more accurate sentiment classification.
- **Continuously Monitor and Improve the Model:** Customer language evolves over time, and sentiment models should evolve with it. Regularly retraining the model on new customer reviews, monitoring performance, and analyzing misclassified examples will help maintain accuracy and ensure the system remains aligned with changing customer behavior.

## Future Improvements

Although this project achieved strong performance, several enhancements could further improve the system. Potential future developments include:

- Fine-tuning DistilBERT or BERT on the full IMDb dataset to unlock their full contextual capabilities.
- Expanding the classification task beyond binary sentiment to include positive, neutral, and negative classes.
- Incorporating aspect-based sentiment analysis to identify sentiment toward specific product features rather than assigning a single overall label.
- Building a real-time inference API using FastAPI or Django REST Framework for seamless integration into customer support systems.
- Developing an interactive dashboard with Streamlit, Dash, or Power BI to visualize sentiment trends, review volumes, and emerging issues.
- Extending support to multilingual sentiment analysis, enabling organizations to monitor customer feedback across global markets.

These improvements would transform the project from a research prototype into a production-ready business intelligence solution.

## Conclusion

Customer feedback is one of the richest sources of business intelligence available today, yet its value is often locked within vast amounts of unstructured text.

In this project, I demonstrated how Natural Language Processing and Machine Learning can unlock that value by transforming raw movie reviews into actionable insights.

Starting with comprehensive text preprocessing, I converted unstructured language into numerical features using TF-IDF, explored the data through visualizations, and trained multiple classification models to distinguish between positive and negative sentiment.

Among the traditional machine learning approaches, Logistic Regression achieved the strongest performance with an accuracy of 89.07%, highlighting the effectiveness of combining robust feature engineering with a simple, interpretable algorithm. I also evaluated DistilBERT, illustrating how transformer models offer deeper contextual understanding and significant potential for future improvements through full fine-tuning.

Beyond predictive performance, this project emphasized the importance of Explainable AI. Techniques such as Important Words Analysis and SHAP provided transparency into model decisions, demonstrating that trustworthy AI is not only about achieving high accuracy but also about making predictions that stakeholders can understand and validate.

Ultimately, sentiment analysis extends far beyond classifying movie reviews. Whether applied to e-commerce platforms, customer support systems, social media monitoring, healthcare, finance, or market research, automated sentiment analysis enables organizations to process feedback at scale, respond proactively to customer concerns, and make more informed, data-driven decisions.

As customer-generated content continues to grow, organizations that can effectively transform text into actionable intelligence will be better positioned to enhance customer experiences, strengthen brand reputation, and gain a lasting competitive advantage.

## Frequently Asked Questions (FAQs)

**1. What is sentiment analysis?**
Sentiment analysis is a Natural Language Processing (NLP) task that automatically determines whether a piece of text expresses positive, negative, or neutral sentiment. It is widely used to analyze customer reviews, survey responses, social media posts, and support conversations.

**2. Why was TF-IDF used instead of raw word counts?**
TF-IDF assigns greater importance to words that are informative within a document while reducing the influence of extremely common words. This typically produces more meaningful features and better classification performance than simple word frequency counts.

**3. Why did Logistic Regression outperform Random Forest?**
Text data represented by TF-IDF is high-dimensional and sparse. Linear models such as Logistic Regression often perform exceptionally well in these settings because they efficiently learn relationships between informative features without overcomplicating the decision boundary.

**4. Why wasn't DistilBERT the best-performing model?**
DistilBERT was evaluated on a sample of the dataset rather than being fully fine-tuned on all 50,000 reviews. Transformer models generally require larger datasets, more training time, and greater computational resources to reach their full potential.

**5. What is SHAP, and why is it important?**
SHAP (SHapley Additive exPlanations) is a model explainability technique that quantifies how individual features contribute to a prediction. It helps stakeholders understand, validate, and trust machine learning models by making their decisions transparent.

**6. How can businesses use sentiment analysis?**
Businesses can automate customer feedback analysis, monitor brand reputation, detect emerging issues, prioritize negative reviews, improve products and services, support marketing decisions, and gain continuous insights into customer satisfaction without manually reviewing every comment.

## Explore the Project

Interested in seeing the implementation behind this project?

You can explore the complete source code, Jupyter Notebook, and documentation on GitHub to see how the data was preprocessed, how each model was trained and evaluated, and how explainability techniques such as SHAP were applied to build a transparent and effective sentiment analysis system.

If you enjoyed this walkthrough, consider following along for more projects covering Machine Learning, Natural Language Processing, Data Science, Backend Development, and Artificial Intelligence, where I break down complex concepts into practical, real-world applications.`,
  },
  {
    id: '5',
    slug: 'fraud-detection-imbalanced-learning',
    title:
      'Credit Card Fraud Detection Using Imbalanced Learning Techniques: Building a Machine Learning Model to Identify Fraudulent Transactions',
    description:
      'Developed a credit card fraud detection model using imbalanced learning techniques, comparing multiple algorithms and optimizing predictions with SHAP and threshold tuning.',
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'SMOTE', 'SHAP', 'Imbalanced-Learn'],
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
    content: `## Introduction

Every day, millions of financial transactions take place across the world through credit cards, online payments, and digital banking platforms. While digital payments have made transactions faster and more convenient, they have also created new opportunities for fraudulent activities.

Credit card fraud remains one of the biggest challenges faced by financial institutions. Fraudulent transactions result in direct financial losses, increased operational costs, chargebacks, damaged customer trust, and significant pressure on organizations to build systems capable of identifying suspicious activities quickly and accurately.

Traditional fraud detection systems often rely on predefined rules such as transaction limits, unusual locations, or suspicious spending patterns. Although rule-based systems can detect known fraud patterns, they struggle when fraudsters develop new techniques that bypass existing rules.

Machine learning provides an alternative approach by allowing systems to learn patterns from historical transaction data and identify potentially fraudulent behavior. Instead of relying only on manually defined rules, machine learning models analyze multiple transaction characteristics and estimate the probability that a transaction is fraudulent.

However, credit card fraud detection presents a unique machine learning challenge: extreme class imbalance.

Unlike many classification problems where classes are relatively balanced, fraudulent transactions represent only a tiny fraction of all financial activity. A model can achieve extremely high accuracy simply by predicting that almost every transaction is legitimate while failing at the one task that matters most — identifying fraud.

This project explores the development of a machine learning-based credit card fraud detection system using multiple imbalanced learning techniques. The goal was not only to build a predictive model but also to understand how different approaches handle rare fraud cases and identify the best balance between detecting fraudulent transactions and minimizing false alarms.

The project evaluated multiple machine learning algorithms, including Logistic Regression, Random Forest, and XGBoost, while applying different imbalance handling techniques such as:

- SMOTE (Synthetic Minority Oversampling Technique)
- Random Undersampling
- Class Weighting
- XGBoost scale_pos_weight

The models were evaluated using metrics more appropriate for fraud detection, including:

- Precision
- Recall
- F1-score
- ROC-AUC

The final model was further analyzed using confusion matrices, threshold tuning, and SHAP explainability to understand not only whether the model detected fraud but also why specific transactions were classified as fraudulent.

## Understanding the Credit Card Fraud Detection Problem

At its core, fraud detection is a binary classification problem. Each transaction belongs to one of two categories:

- Legitimate transaction (Class 0)
- Fraudulent transaction (Class 1)

The objective of the machine learning model is to learn patterns from historical transactions and predict whether new transactions are legitimate or fraudulent. However, unlike typical classification problems, fraud detection has an important asymmetry: the consequences of mistakes are not equal. A false prediction can happen in two ways:

### False Positive

A legitimate transaction is incorrectly classified as fraudulent.

Example: A customer makes a genuine purchase, but the system blocks the transaction because it appears suspicious.

Consequences:

- Customer frustration
- Failed payments
- Additional manual investigations
- Poor customer experience

### False Negative

A fraudulent transaction is incorrectly classified as legitimate.

Example: A stolen credit card is used for an unauthorized transaction, but the system fails to detect it.

Consequences:

- Direct financial losses
- Customer disputes
- Increased fraud exposure
- Loss of trust

In most financial systems, false negatives are significantly more costly than false positives. Missing fraudulent activity can result in much larger financial damage than temporarily reviewing a legitimate transaction.

This makes fraud detection a problem where the goal is not simply maximizing accuracy. Instead, the focus is finding a model that achieves the right balance between:

- Detecting as much fraud as possible
- Avoiding unnecessary disruption to legitimate customers

## Why Accuracy Is Misleading in Fraud Detection

One of the biggest mistakes when working with imbalanced datasets is relying heavily on accuracy. Accuracy measures the percentage of predictions the model gets correct:

- **Accuracy** = Correct Predictions / Total Predictions

At first glance, accuracy appears useful. However, in fraud detection, it can create a false sense of success. Imagine a dataset containing:

- 99.83% legitimate transactions
- 0.17% fraudulent transactions

A model that predicts every transaction as legitimate would achieve approximately 99.83% accuracy. It sounds impressive but the model would detect zero fraudulent transactions. For a fraud detection system, such a model would be completely useless.

This is why this project focuses on evaluation metrics designed for imbalanced classification problems.

- **Precision:** Precision answers the question: "When the model predicts fraud, how often is it actually correct?" A high precision score means fewer legitimate transactions are incorrectly flagged. This is important because financial institutions do not want their fraud investigation teams overwhelmed by false alarms.
- **Recall:** Recall answers the question: "Of all actual fraudulent transactions, how many did the model successfully detect?" A high recall score means the model catches more fraud cases. In fraud detection, improving recall is often valuable because missing fraud can be extremely expensive.
- **F1-Score:** The F1-score combines precision and recall into a single metric. It provides a balance between catching fraudulent transactions and avoiding unnecessary false alerts. Because fraud detection requires balancing these competing priorities, F1-score is often more meaningful than accuracy.

## Dataset Overview

The dataset used in this project was obtained from Kaggle and contains historical credit card transactions labeled as either legitimate or fraudulent. Due to confidentiality concerns, the original transaction features were anonymized. The dataset contains:

- 28 anonymized numerical features (V1 to V28)
- Transaction time (Time)
- Transaction amount (Amount)
- Target variable (Class)

The target variable represents:

- Class = 0 → Legitimate transaction
- Class = 1 → Fraudulent transaction

The anonymized variables were transformed using Principal Component Analysis (PCA) by the original dataset creators to protect sensitive financial information while maintaining useful patterns for machine learning.

After removing duplicate records, the dataset contained: 283,726 transactions with 30 input features and 1 target variable.

The class distribution was extremely imbalanced:

- Approximately 99.83% legitimate transactions
- Approximately 0.17% fraudulent transactions

This imbalance became the central challenge of the project.

## Why Imbalanced Learning Was Necessary

Machine learning algorithms generally perform best when they have enough examples from each class to learn meaningful patterns.

In this dataset:

- Legitimate transactions had hundreds of thousands of examples.
- Fraudulent transactions represented only a very small minority.

Without addressing this imbalance, many algorithms would naturally favor the majority class.

For example, a model might learn: "Most transactions are legitimate, therefore predicting legitimate most of the time gives good performance." While this strategy improves accuracy, it fails the primary objective of fraud detection. To overcome this challenge, this project investigated several imbalanced learning techniques.

### SMOTE (Synthetic Minority Oversampling Technique)

SMOTE improves class balance by generating synthetic examples of the minority class. Instead of simply duplicating existing fraudulent transactions, SMOTE creates new synthetic fraud samples based on similarities between existing fraud cases.

The advantage is that the model receives more examples of fraudulent behavior without simply memorizing duplicate transactions. However, synthetic data generation must be carefully evaluated because artificially created examples may not always perfectly represent real-world fraud patterns.

### Random Undersampling

Random undersampling reduces the number of legitimate transactions to create a more balanced dataset. The advantage is faster training and improved class balance. The disadvantage is that removing legitimate transactions may discard useful information about normal customer behavior.

### Class Weighting

Class weighting does not modify the dataset. Instead, it changes how the algorithm treats mistakes. Misclassifying a fraudulent transaction receives a higher penalty than misclassifying a legitimate transaction.

This encourages the model to pay more attention to the minority class.

### XGBoost Scale Positive Weight

XGBoost provides a specialized parameter called scale_pos_weight, which increases the importance of minority class errors during training. This technique is commonly used for highly imbalanced classification problems.

## Exploratory Data Analysis: Understanding the Data Before Building Models

Before training any machine learning model, it is essential to understand the underlying data. Exploratory Data Analysis (EDA) provides valuable insights into the structure, quality, and distribution of the dataset while revealing patterns that may influence model performance.

For fraud detection, EDA serves an even greater purpose. Since fraudulent transactions are exceptionally rare, visualizing the data helps quantify the degree of imbalance, identify potential preprocessing requirements, and determine whether certain features exhibit stronger relationships with fraudulent activity.

The exploratory analysis in this project focused on:

- Class distribution
- Transaction amount distribution
- Feature correlations
- Relationships between features and the fraud class

These analyses established the foundation for selecting appropriate preprocessing techniques and machine learning algorithms.

### Class Distribution Analysis

![Bar chart showing the extreme class imbalance between legitimate and fraudulent transactions](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316968/class_distribution_shhuwx.png)

The first step was examining the distribution of the target variable. After removing duplicate records, the dataset contained approximately 283,726 transactions, of which:

- 99.83% were legitimate transactions
- 0.17% were fraudulent transactions

The visualization immediately highlights one of the defining characteristics of fraud detection datasets: extreme class imbalance.

While the legitimate class dominates the dataset, fraudulent transactions occupy only a tiny fraction of the observations. This imbalance presents a significant challenge because many machine learning algorithms assume that classes are relatively balanced during training.

Without appropriate handling, a model can become biased toward predicting the majority class simply because it encounters legitimate transactions far more frequently than fraudulent ones.

The visualization reinforces why this project prioritizes evaluation metrics such as Precision, Recall, and F1-score over overall accuracy. It also justifies investigating specialized techniques like SMOTE, class weighting, and undersampling to improve the model's ability to recognize the minority class.

### Transaction Amount Distribution

![Histogram showing the right-skewed distribution of transaction amounts](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316957/amount_distribution_o92gsi.png)

The distribution of transaction amounts provides another important perspective on customer behavior. The histogram reveals a highly right-skewed distribution. Most transactions involve relatively small amounts, while only a limited number represent high-value purchases.

This pattern is expected in financial transaction datasets, where everyday purchases such as groceries, subscriptions, transportation, and online shopping greatly outnumber expensive transactions.

Interestingly, fraudulent transactions are not necessarily concentrated among high-value purchases. Fraudsters often attempt smaller transactions to avoid triggering fraud detection systems before progressing to larger unauthorized purchases.

Because of this skewed distribution, directly applying algorithms that are sensitive to feature scales can reduce model performance. To address this issue, the Time and Amount features were transformed using RobustScaler.

Unlike StandardScaler, which relies on the mean and standard deviation, RobustScaler uses the median and interquartile range (IQR), making it considerably more resistant to extreme outliers. This makes it particularly suitable for financial transaction data where unusually large purchases naturally occur.

### Correlation Heatmap

![Correlation heatmap showing weak relationships among the anonymized PCA features](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316995/correlation_heatmap_adzjke.png)

Understanding relationships between variables helps determine whether features contain redundant information or exhibit multicollinearity that could negatively affect certain machine learning algorithms.

The correlation heatmap showed relatively weak relationships among most features. This outcome is expected because the original dataset creators transformed the confidential transaction variables using Principal Component Analysis (PCA) before releasing the dataset.

PCA creates new orthogonal components that capture most of the variance while minimizing correlations between variables. As a result, the transformed features (V1–V28) display very little multicollinearity.

From a modeling perspective, this is beneficial. Low correlation between features reduces redundancy and allows many machine learning algorithms to extract information from multiple independent dimensions instead of repeatedly learning the same patterns.

Although the variables have been anonymized, they still preserve enough statistical information for predictive modeling without exposing sensitive customer or merchant data.

### Feature Correlation with Fraud Class

![Bar chart showing which anonymized features correlate most strongly with the fraud class](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317007/feature_correlation_with_fraud_class_psqmwq.png)

While the overall feature correlations remain relatively weak, several variables demonstrate much stronger relationships with the target variable.

The analysis showed that features such as V17, V14, V12, and V10 exhibited the strongest negative correlations with fraudulent transactions, while variables including V4 and V11 displayed stronger positive relationships.

Since the features have been anonymized through PCA, their real-world meanings remain unknown. Nevertheless, the strength of their correlations indicates that these variables contain important information for distinguishing legitimate transactions from fraudulent ones.

Rather than interpreting the financial meaning of these variables, the analysis focuses on their predictive value. Features with stronger correlations are more likely to influence machine learning predictions and later become significant contributors in model explainability techniques such as SHAP.

This observation proved particularly valuable during model interpretation, where several of these variables emerged among the most influential predictors.

## Data Preprocessing

Machine learning models are only as effective as the quality of the data they learn from. Before training the models, several preprocessing steps were performed to ensure the dataset was clean, consistent, and suitable for classification.

- **Duplicate Removal:** The first preprocessing step involved identifying and removing duplicate transaction records. Duplicate observations can introduce bias by allowing models to repeatedly learn identical examples, artificially inflating performance metrics and reducing generalization. After removing duplicates, the dataset contained 283,726 unique transactions, providing a cleaner and more representative sample for training and evaluation.
- **Feature Scaling:** Most machine learning algorithms benefit from features being on comparable numerical scales. The dataset already contained PCA-transformed variables that were standardized during the original preprocessing performed by the dataset creators. However, the Time and Amount variables remained on their original scales. Rather than applying standard normalization, RobustScaler was used. Robust scaling was chosen because financial transaction data naturally contains outliers. Extremely large purchases, although uncommon, are legitimate and should not excessively influence feature scaling. By centering the data around the median instead of the mean, RobustScaler minimizes the impact of these outliers while preserving meaningful differences between transactions.
- **Stratified Train-Test Split:** Maintaining the original fraud ratio during model evaluation is critical. If the train-test split were performed randomly without considering class proportions, one subset could accidentally contain significantly more fraud cases than the other, leading to misleading evaluation results. To prevent this, the dataset was divided using stratified sampling, ensuring both the training and testing datasets preserved the same distribution of legitimate and fraudulent transactions. This approach produces a more realistic evaluation of how the models would perform on unseen data.

## Building and Evaluating Multiple Machine Learning Models

Rather than relying on a single algorithm, this project evaluated multiple machine learning approaches to determine which model best addressed the challenges posed by highly imbalanced fraud detection data.

The models selected represent different families of machine learning algorithms, each with unique strengths and weaknesses.

### Logistic Regression

Logistic Regression served as the baseline linear model.

Despite its simplicity, Logistic Regression remains one of the most widely used classification algorithms due to its interpretability, computational efficiency, and ability to establish strong baseline performance.

To evaluate how imbalance handling affected linear models, four variations were trained:

- Baseline Logistic Regression
- Logistic Regression with SMOTE
- Logistic Regression with Random Undersampling
- Logistic Regression with Class Weighting

These experiments demonstrated how different balancing techniques influence precision and recall in linear classifiers.

### Random Forest

Random Forest is an ensemble learning algorithm that combines numerous decision trees to produce more stable and accurate predictions. Unlike individual decision trees, Random Forest reduces variance through bootstrap aggregation (bagging), making it more robust to noise and capable of capturing complex nonlinear relationships within the data.

Two versions were evaluated:

- Baseline Random Forest
- Balanced Random Forest using class weighting

Random Forest ultimately emerged as the strongest-performing model in this project.

### XGBoost

Extreme Gradient Boosting (XGBoost) is one of the most powerful machine learning algorithms available for structured tabular data. Unlike Random Forest, which builds trees independently, XGBoost constructs trees sequentially, allowing each new tree to correct the errors made by previous ones.

Two configurations were evaluated:

- Baseline XGBoost
- XGBoost with scale_pos_weight

The scale_pos_weight parameter increased the importance assigned to fraudulent transactions during training, helping the algorithm focus more effectively on the minority class. Although XGBoost achieved an impressive ROC-AUC score, it did not surpass Random Forest when evaluated using the F1-score, which better reflects the balance between precision and recall required for fraud detection.

## Model Comparison

After training each model, their performance was evaluated using Precision, Recall, F1-score, and ROC-AUC.

The comparison revealed an important insight: more complex imbalance-handling techniques did not always produce better overall performance.

The baseline Random Forest model achieved the highest F1-score of 0.838, outperforming both its balanced counterpart and the XGBoost models.

This finding demonstrates an important lesson in applied machine learning: sophisticated preprocessing techniques and more advanced algorithms do not automatically guarantee superior results. Model performance should always be validated empirically using metrics aligned with the business objective rather than assumptions about algorithm complexity.

Furthermore, the comparison highlighted the trade-offs introduced by different imbalance strategies. Techniques that substantially increased recall often did so at the expense of precision, generating more false positives. Conversely, models optimized for precision occasionally failed to identify a greater proportion of fraudulent transactions.

Because financial fraud detection requires balancing customer experience with financial risk, selecting the best model ultimately depended on achieving the most effective compromise between these competing objectives rather than maximizing any single metric in isolation.

## Results and Discussion: Identifying the Best Model

After evaluating multiple machine learning algorithms and imbalance-handling strategies, the next step was to determine which model provided the most reliable performance for detecting fraudulent transactions.

Rather than selecting the model with the highest accuracy or even the highest ROC-AUC score, the evaluation focused on metrics that better reflect the objectives of fraud detection. In highly imbalanced classification problems, a successful model should identify as many fraudulent transactions as possible while minimizing the number of legitimate transactions incorrectly flagged for investigation.

The evaluation showed that the baseline Random Forest model achieved the best overall balance between precision and recall, resulting in the highest F1-score of 0.838 on the test dataset.

- **Random Forest (Baseline)** — Precision: 0.97, Recall: 0.74, F1-Score: 0.84, ROC-AUC: 0.93
- **Random Forest (Balanced)** — Precision: 0.99, Recall: 0.72, F1-Score: 0.83, ROC-AUC: 0.93
- **XGBoost (Baseline)** — Precision: 0.93, Recall: 0.73, F1-Score: 0.82, ROC-AUC: 0.97
- **XGBoost (Balanced)** — Precision: 0.76, Recall: 0.79, F1-Score: 0.77, ROC-AUC: 0.97
- **Logistic Regression (Baseline)** — Precision: 0.85, Recall: 0.58, F1-Score: 0.69, ROC-AUC: 0.96
- **Logistic Regression (Class Weighting)** — Precision: 0.06, Recall: 0.87, F1-Score: 0.11, ROC-AUC: 0.97
- **Logistic Regression (SMOTE)** — Precision: 0.05, Recall: 0.87, F1-Score: 0.10, ROC-AUC: 0.96
- **Logistic Regression (Undersampling)** — Precision: 0.05, Recall: 0.87, F1-Score: 0.10, ROC-AUC: 0.96

Several interesting observations emerged from this comparison.

Although XGBoost achieved a higher ROC-AUC score than Random Forest, it did not produce the highest F1-score. Similarly, applying imbalance-handling techniques such as SMOTE, undersampling, or aggressive class weighting did not consistently improve model performance. In several cases, these techniques significantly increased recall but dramatically reduced precision, producing a large number of false alarms.

These findings reinforce an important principle in applied machine learning: the most complex model is not necessarily the most effective model. Success depends on selecting an algorithm that aligns with the business objective rather than pursuing the highest value for a single evaluation metric.

## Visualisations for the Best Model: Random Forest Baseline

### Confusion Matrix Analysis

![Confusion matrix for the baseline Random Forest fraud detection model](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784316979/confusion_matrix_rf_baseline_gsxcy3.png)

A confusion matrix provides a detailed breakdown of model predictions by showing not only how many transactions were classified correctly but also the types of mistakes the model made.

The Random Forest model produced the following results:

- True Negatives: 56,649
- False Positives: 2
- True Positives: 70
- False Negatives: 25

These numbers provide valuable business insights beyond standard evaluation metrics. The model correctly identified 56,649 legitimate transactions, demonstrating excellent reliability in recognizing normal customer activity.

More importantly, it incorrectly flagged only two legitimate transactions as fraudulent. Such a remarkably low false positive rate minimizes unnecessary manual investigations and reduces customer inconvenience caused by declined transactions.

The model also successfully detected 70 fraudulent transactions, preventing potential financial losses. However, 25 fraudulent transactions remained undetected, illustrating that even high-performing models cannot eliminate fraud entirely.

This highlights a fundamental challenge in fraud detection: reducing false negatives often increases false positives, while reducing false positives may allow more fraudulent transactions to escape detection. Selecting the appropriate balance depends on the organization's risk tolerance and operational priorities.

### ROC Curve Analysis

![ROC curve for the baseline Random Forest model showing strong discriminative ability](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317033/roc_curve_rf_baseline_dhlije.png)

The Receiver Operating Characteristic (ROC) Curve evaluates how effectively a model separates fraudulent and legitimate transactions across different classification thresholds. The Random Forest model achieved an ROC-AUC score of 0.93, indicating excellent discriminative ability.

An ROC-AUC value close to 1.0 suggests that the model consistently assigns higher fraud probabilities to fraudulent transactions than to legitimate ones. In practical terms, the model has a very high probability of ranking a randomly selected fraudulent transaction above a randomly selected legitimate transaction.

Although ROC-AUC provides a useful overall measure of classification performance, it can sometimes paint an overly optimistic picture when dealing with highly imbalanced datasets. Since legitimate transactions dominate the dataset, correctly classifying the majority class contributes heavily to the ROC metric.

For this reason, ROC-AUC should always be interpreted alongside metrics such as Precision, Recall, and the Precision–Recall Curve.

### Precision–Recall Curve Analysis

![Precision-recall curve for the baseline Random Forest model](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317020/precision_recall_curve_rf_baseline_se7xcw.png)

For highly imbalanced datasets like credit card fraud detection, the Precision–Recall (PR) Curve is often more informative than the ROC Curve. Rather than emphasizing performance across both classes equally, the PR Curve focuses specifically on the model's ability to identify the minority class in this case, fraudulent transactions.

The Random Forest model maintained high precision even as recall increased, indicating that it could detect a substantial proportion of fraudulent transactions without generating excessive false positives.

This behavior is particularly desirable in real-world fraud detection systems, where every false alarm requires investigation while every missed fraud can result in financial loss. The Precision–Recall Curve therefore reinforces the conclusion that Random Forest provides an effective balance between fraud detection capability and operational efficiency.

## Threshold Tuning: Finding the Right Business Balance

Most binary classification models use a default probability threshold of 0.5 to determine class membership. If the predicted probability exceeds 0.5, the transaction is classified as fraudulent; otherwise, it is classified as legitimate. However, this threshold is not fixed. Adjusting it changes the relationship between precision and recall, allowing organizations to tailor the model according to their specific business objectives.

The threshold analysis produced the following results:

- **Threshold 0.3** — Precision: 0.88, Recall: 0.76, F1-Score: 0.81
- **Threshold 0.4** — Precision: 0.95, Recall: 0.75, F1-Score: 0.84
- **Threshold 0.5** — Precision: 0.97, Recall: 0.74, F1-Score: 0.84
- **Threshold 0.7** — Precision: 0.98, Recall: 0.65, F1-Score: 0.78

Several important trade-offs emerged.

Lowering the threshold to 0.4 slightly improved recall, allowing the model to detect additional fraudulent transactions while only marginally reducing precision. This configuration may be preferable for organizations where preventing fraud losses is the highest priority. Reducing the threshold further to 0.3 increased recall again but generated more false positives, lowering overall precision.

Conversely, increasing the threshold to 0.7 produced exceptionally high precision but substantially reduced recall, allowing more fraudulent transactions to pass undetected. The default threshold of 0.5 ultimately provided the best balance between fraud detection and operational efficiency, achieving the highest overall F1-score.

This experiment demonstrates that machine learning models should not simply be optimized for predictive accuracy. They should be configured according to business objectives and organizational risk tolerance.

## Explaining Predictions with SHAP

![SHAP summary plot showing the most influential features driving the Random Forest fraud predictions](https://res.cloudinary.com/f7ko7ayw/image/upload/v1784317044/shap_summary_rf_baseline_iom8hs.png)

One of the most significant challenges in modern machine learning is explainability.

Although complex models such as Random Forest often achieve excellent predictive performance, they are frequently criticized as "black boxes" because their decision-making processes are difficult to interpret. To improve transparency, this project incorporated SHAP (SHapley Additive exPlanations).

SHAP explains individual predictions by measuring how much each feature contributes to moving a prediction toward either the fraudulent or legitimate class.

Unlike traditional feature importance measures that provide only global rankings, SHAP explains both overall model behavior and individual predictions. The SHAP summary plot identified several features including V14, V10, V12, and V17 as the strongest contributors to fraud predictions.

These findings closely aligned with the earlier correlation analysis, providing additional confidence that the model was learning meaningful statistical patterns rather than random noise. For individual transactions, SHAP force plots reveal how specific feature values influence a prediction. Some variables push the prediction toward fraud, while others pull it toward legitimacy. This level of transparency is invaluable for fraud analysts, enabling them to understand why a transaction was flagged and supporting faster, more informed investigations.

Explainability is increasingly important in regulated industries such as banking, where organizations must justify automated decisions to customers, auditors, and regulators. Integrating SHAP into the fraud detection workflow therefore enhances both model transparency and operational trust.

## Business Implications and Recommendations

From a business perspective, fraud detection extends beyond predictive performance. Every prediction has operational and financial consequences.

A false positive may require manual review, delay customer purchases, or damage the customer experience. A false negative, however, can result in direct financial losses, reimbursement costs, reputational damage, and increased exposure to fraudulent activity.

Based on the findings of this project, several recommendations emerge:

- Deploy the baseline Random Forest model, as it achieved the strongest balance between precision and recall.
- Select the classification threshold based on business priorities. Organizations prioritizing fraud prevention may benefit from a slightly lower threshold, while those focused on customer experience may prefer the default threshold.
- Integrate SHAP explanations into fraud investigation workflows to provide analysts with interpretable reasons behind flagged transactions.
- Continuously monitor and retrain the model using newly labeled transaction data to adapt to evolving fraud patterns and maintain predictive performance.

## Project Limitations

While the project demonstrates the effectiveness of machine learning for fraud detection, several limitations should be acknowledged.

The dataset represents historical transactions and therefore may not fully capture evolving fraud strategies observed in real-world financial systems. Fraudsters continuously adapt their techniques, making periodic retraining essential.

Additionally, the anonymized PCA features prevent domain-specific interpretation of individual variables. While this protects confidentiality, it limits the ability to derive business insights from the underlying transaction characteristics.

The project also focused primarily on supervised learning approaches and did not explore anomaly detection techniques, deep learning models, or graph-based fraud detection methods that have gained increasing attention in recent years.

## Future Improvements

Future work could extend this project in several ways:

- Hyperparameter optimization using Grid Search or Bayesian Optimization.
- Evaluation of additional ensemble methods such as LightGBM and CatBoost.
- Investigation of anomaly detection algorithms including Isolation Forests and Autoencoders.
- Development of a real-time fraud detection API using FastAPI or Flask.
- Deployment with monitoring tools capable of detecting concept drift and triggering automated retraining.
- Integration with MLOps frameworks such as MLflow for experiment tracking and model versioning.

These enhancements would move the project closer to a production-ready fraud detection system capable of adapting to changing transaction patterns.

## Conclusion

Credit card fraud detection remains one of the most challenging applications of machine learning due to the extreme imbalance between legitimate and fraudulent transactions. This project demonstrated that building an effective fraud detection system requires far more than selecting a powerful algorithm. Success depends on understanding the data, choosing appropriate evaluation metrics, addressing class imbalance thoughtfully, and interpreting results within a business context.

Among all evaluated models, the baseline Random Forest delivered the strongest overall performance, achieving an excellent balance between precision and recall while maintaining a remarkably low false positive rate. Through threshold tuning and SHAP-based explainability, the project also showed that model performance and transparency can be optimized together rather than treated as competing objectives.

Perhaps the most important lesson from this work is that machine learning is not solely about maximizing metrics. In fraud detection, every prediction represents a business decision with real financial and customer implications. Building models that are accurate, interpretable, and aligned with organizational objectives is ultimately what transforms predictive analytics into practical business value.`,
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
