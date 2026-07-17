// Central Cloudinary image registry. All site images are served from Cloudinary.
// Replace local /images/* references with these constants.

const CLOUD = 'https://res.cloudinary.com/f7ko7ayw/image/upload';

export const images = {
  logo: `${CLOUD}/v1784316202/Logo_uqubrg.svg`,
  profilePhoto: `${CLOUD}/v1784316243/Profile_photo_mggajk.jpg`,
  // Page backgrounds
  homePage: `${CLOUD}/v1784316270/Home_page_xzkxpr.png`,
  aboutPage: `${CLOUD}/v1784316243/About_Page_fpela3.png`,
  contactPage: `${CLOUD}/v1784316258/Contact_page_ylywfp.png`,
  // Project thumbnails (also used as project hero images)
  customerChurn: `${CLOUD}/v1784316286/customer_churn_iie3zm.png`,
  segmentation: `${CLOUD}/v1784316332/segmentation_wng0sm.png`,
  stockMarket: `${CLOUD}/v1784316344/stock_market_l6ipl4.png`,
  nlpSentiment: `${CLOUD}/v1784316320/NLP_sentiment_awjrsl.png`,
  fraudDetection: `${CLOUD}/v1784316297/Fraud_detection_lldcf4.png`,
  hmSystem: `${CLOUD}/v1784316309/HMSystem_API_h0kgib.png`,
} as const;

export type ImageKey = keyof typeof images;

// Map project slugs to their Cloudinary hero/thumbnail image.
export const projectImages: Record<string, string> = {
  'telecom-churn-prediction': images.customerChurn,
  'consumer-finance-segmentation': images.segmentation,
  'stock-volatility-api': images.stockMarket,
  'sentiment-analysis': images.nlpSentiment,
  'credit-card-fraud-detection': images.fraudDetection,
  'hospital-management-api': images.hmSystem,
};

export default images;
