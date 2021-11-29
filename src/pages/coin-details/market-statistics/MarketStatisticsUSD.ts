export type MarketStatisticsUSD = Partial<{
  currentPrice: string;
  priceChange24h: string;
  priceChangePercentage24h: string;
  priceChangePercentage7d: string;
  priceChangePercentage14d: string;
  priceChangePercentage30d: string;
  priceChangePercentage60d: string;
  priceChangePercentage200d: string;
  priceChangePercentage1y: string;
  dailyHighestPrice: string;
  dailyLowestPrice: string;
  allTimeHighestPrice: string;
  allTimeHighestDate: string;
  allTimeLowestPrice: string;
  allTimeLowestDate: string;
}>;
