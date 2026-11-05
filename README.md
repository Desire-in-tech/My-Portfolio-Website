# Desire E — Software Engineer & AI Developer Portfolio

A modern, responsive personal portfolio website showcasing software engineering, machine learning, backend development, data science, and technical writing projects.

The portfolio is designed to present practical technical work, demonstrate problem-solving ability, and provide a central place for projects, blog content, professional information, and contact details.

## Live Website

**Production:** https://desire-djh.pages.dev

**Source Code:** https://github.com/Desire-in-tech/My-Portfolio-Website

## Website Screenshots

The previews below show the portfolio frontend. Select any screenshot to open the full-size image.

<p align="center">
  <a href="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953038/Screenshot_2026-10-25_205748_ukwmug.png"><img src="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953038/Screenshot_2026-10-25_205748_ukwmug.png" alt="Portfolio frontend screenshot 1" width="32%" /></a>
  <a href="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953075/Screenshot_2026-10-25_210026_kwrsa4.png"><img src="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953075/Screenshot_2026-10-25_210026_kwrsa4.png" alt="Portfolio frontend screenshot 2" width="32%" /></a>
  <a href="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953055/Screenshot_2026-10-25_205944_wv3cvt.png"><img src="https://res.cloudinary.com/f7ko7ayw/image/upload/v1792953055/Screenshot_2026-10-25_205944_wv3cvt.png" alt="Portfolio frontend screenshot 3" width="32%" /></a>
</p>

---

## About the Project

This portfolio brings together software engineering and data-focused projects across:

* Machine Learning
* Artificial Intelligence
* Backend Development
* Data Science
* Python Development
* React Development
* REST APIs
* Data Visualization
* Technical Writing

The website also includes a technical blog covering software development, machine learning, data science, backend engineering, career development, and related technology topics.

The project is built as a frontend application and deployed to Cloudflare Pages.

---

## Features

### Portfolio

* Responsive personal portfolio
* Home, About, Projects, Blog, and Contact sections
* Project showcase with dedicated project pages
* Technical skills and professional information
* Responsive navigation and mobile-friendly layouts
* Global/remote-oriented professional presentation

### Projects

The portfolio currently showcases projects across machine learning, backend development, APIs, NLP, fraud detection, financial analysis, and data science.

Featured projects include:

#### Consumer Finance Segmentation

Customer segmentation using the 2019 Survey of Consumer Finances (SCF) data from U.S. households, published by the Federal Reserve.

Key techniques include:

* K-Means clustering
* Principal Component Analysis (PCA)
* Exploratory data analysis
* Customer segmentation
* Interactive data visualization

#### Telecom Customer Churn Prediction

A full-stack machine learning application for predicting telecom customer churn.

Technologies and techniques include:

* React
* Vite
* Django REST Framework
* XGBoost
* SHAP
* Machine learning classification
* Model explainability

The project uses the IBM Telco Customer Churn dataset containing 7,043 customer records.

#### Credit Card Fraud Detection

A machine learning project focused on detecting fraudulent credit-card transactions in a highly imbalanced dataset.

Key aspects include:

* Fraud detection
* Imbalanced classification
* Machine learning
* Model evaluation
* Financial transaction analysis

The dataset contains a very small proportion of fraudulent transactions, making class imbalance an important part of the problem.

#### NLP Sentiment Analysis

A natural language processing project using the IMDB movie review dataset.

The project explores:

* Text preprocessing
* Natural language processing
* Sentiment classification
* Machine learning
* Text-based prediction

The dataset contains 50,000 labeled movie reviews.

#### Stock Volatility API

A backend API for retrieving financial market data and analyzing stock volatility.

Technologies include:

* Python
* FastAPI
* Yahoo Finance data
* GARCH-based volatility analysis
* REST API development

#### Hospital Management API

A backend API demonstrating secure API architecture and role-based access control.

Key features include:

* Django REST Framework
* JWT authentication
* Role-based access control
* Docker
* RESTful API architecture

---

## Blog

The portfolio includes a dedicated technical blog with individual post pages and SEO-oriented metadata.

Blog content covers areas including:

* Machine Learning
* Backend Development
* Data Science
* Software Engineering
* Career Development
* Artificial Intelligence
* Technology

Each blog post can include:

* Title
* Slug
* Category
* Publication date
* Updated date
* Author
* Excerpt
* Featured image
* Image alt text
* SEO title
* SEO description
* Target keywords
* Tags
* Article content
* Featured-post status

The blog is integrated directly into the application rather than relying on an external CMS.

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Development

* Node.js
* npm
* Git
* GitHub

### Deployment

* Cloudflare Pages

### Backend / Machine Learning Projects

Depending on the individual project, the portfolio demonstrates technologies including:

* Python
* Django
* Django REST Framework
* FastAPI
* XGBoost
* SHAP
* scikit-learn
* PCA
* K-Means
* GARCH
* JWT authentication
* Docker

### External Services

The portfolio uses selected external services for functionality and content delivery, including:

* Cloudinary for hosted images and visual assets
* Google Analytics 4 for consent-aware website analytics

---

## Analytics & Privacy

The portfolio uses a consent-aware Google Analytics 4 implementation.

GA4 property:

`G-WQB2VFRK7T`

Analytics are **denied by default** and are activated only after the visitor provides analytics consent.

The implementation includes:

* Consent-aware analytics loading
* SPA route tracking
* Manual pageview tracking
* Analytics consent revocation
* Analytics cookie handling
* Google Signals disabled
* Ad personalization disabled
* User-provided data collection disabled
* Location and device data protections
* No intentional transmission of contact-form information to analytics
* Query-string protection against transmitting email addresses through pageview URLs

The website also provides dedicated Privacy Policy and Cookies Policy pages.

### Privacy Policies

* Privacy Policy
* Cookies Policy

Both policies have an effective date of September 27, 2026.

---

## Search Engine Optimization

The portfolio includes SEO-related functionality such as:

* Page-specific titles
* Meta descriptions
* Blog metadata
* Canonical URLs
* Open Graph/social metadata
* XML sitemap
* `robots.txt`
* Blog RSS feed
* Structured navigation
* Search Engine indexing support

The website is verified in Google Search Console.

---

## Accessibility & Responsive Design

The website is designed to work across desktop and mobile screen sizes.

Accessibility considerations include:

* Semantic HTML
* Descriptive image alternative text
* Responsive layouts
* Keyboard-accessible interactive elements
* Clear navigation
* Mobile-friendly interfaces

---

## Project Structure

```text
My-Portfolio-Website/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
├── vite.config.ts
└── README.md
```

The application source code lives primarily inside `src/`, while static assets and generated/public resources are handled through the appropriate project directories.

---

## Running the Project Locally

### Prerequisites

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/Desire-in-tech/My-Portfolio-Website.git
cd My-Portfolio-Website
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

### Build for production

```bash
npm run build
```

### Type checking

```bash
npm run typecheck
```

---

## Deployment

The production site is deployed through Cloudflare Pages.

The deployment workflow is connected to the GitHub repository, allowing changes merged into the production branch to trigger the Cloudflare Pages deployment process.

Production:

**https://desire-djh.pages.dev**

---

## SEO & Indexing

The production website has been connected to Google Search Console for search-engine monitoring and indexing management.

The site provides an XML sitemap and `robots.txt` file to help search engines discover and crawl its content.

---

## Development Principles

The project is maintained with an emphasis on:

* Minimal, targeted changes
* Maintainable React/TypeScript code
* Responsive design
* Privacy-conscious analytics
* SEO-friendly content
* Accessible interfaces
* Production-ready deployments
* Clear separation between application functionality and external services

Changes should avoid unnecessary modifications to unrelated files or functionality.

---

## Author

**Desire E**

Software Engineer & AI Developer

Focused on building practical software solutions across machine learning, backend development, data science, and modern web technologies.

---

## License

This repository is a personal portfolio project.

Unless otherwise stated, the project's original source code, written content, visual assets, and other original materials remain the property of the author.
