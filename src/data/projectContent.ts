/**
 * Project write-ups are loaded individually so opening one project does not
 * download the long-form content for every other project.
 */
const projectContentLoaders: Record<string, () => Promise<{ default: string }>> = {
  "consumer-finance-segmentation": () => import("./projectContent/consumer-finance-segmentation"),
  "stock-market-volatility-forecasting-api": () => import("./projectContent/stock-market-volatility-forecasting-api"),
  "nlp-sentiment-analysis": () => import("./projectContent/nlp-sentiment-analysis"),
  "fraud-detection-imbalanced-learning": () => import("./projectContent/fraud-detection-imbalanced-learning"),
};

export function loadProjectContent(slug: string): Promise<{ default: string }> | undefined {
  return projectContentLoaders[slug]?.();
}
