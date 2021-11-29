import { CoinDetailsAPIResponse } from './CoinDetailsAPIResponse';
import { MarketStatisticsUSD } from '../market-statistics/MarketStatisticsUSD';

export const extractMarketStatistics = (
  res: CoinDetailsAPIResponse
): MarketStatisticsUSD => {
  const { market_data } = res;

  return {
    currentPrice: formatPrice(market_data?.current_price?.usd),
    priceChange24h: formatPrice(market_data?.price_change_24h_in_currency?.usd),
    priceChangePercentage24h: formatPercentage(
      market_data?.price_change_percentage_24h_in_currency?.usd
    ),
    priceChangePercentage7d: formatPercentage(
      market_data?.price_change_percentage_7d_in_currency?.usd
    ),
    priceChangePercentage14d: formatPercentage(
      market_data?.price_change_percentage_14d_in_currency?.usd
    ),
    priceChangePercentage30d: formatPercentage(
      market_data?.price_change_percentage_30d_in_currency?.usd
    ),
    priceChangePercentage60d: formatPercentage(
      market_data?.price_change_percentage_60d_in_currency?.usd
    ),
    priceChangePercentage200d: formatPercentage(
      market_data?.price_change_percentage_200d_in_currency?.usd
    ),
    priceChangePercentage1y: formatPercentage(
      market_data?.price_change_percentage_1y_in_currency?.usd
    ),
    dailyHighestPrice: formatPrice(market_data?.high_24h?.usd),
    dailyLowestPrice: formatPrice(market_data?.low_24h?.usd),
    allTimeHighestPrice: formatPrice(market_data?.ath?.usd),
    allTimeHighestDate: formatDate(market_data?.ath_date?.usd),
    allTimeLowestPrice: formatPrice(market_data?.atl?.usd),
    allTimeLowestDate: formatDate(market_data?.atl_date?.usd)
  };
};

const formatPrice = (x?: number | null) => {
  if (!x) return;
  return withUsdCurrency(roundAndStringify(x));
};
const formatPercentage = (x?: number | null) => {
  if (!x) return;
  return withPercentage(roundAndStringify(x));
};
const formatDate = (dateISO?: string | null) =>
  dateISO ? new Date(dateISO).toDateString() : undefined;
const roundAndStringify = (x: number) => {
  if (Number.isInteger(x)) return `${x}`;

  return `${x.toFixed(1)}`;
};

const withUsdCurrency = (x: string) => `$${x}`;
const withPercentage = (x: string) => `${x}%`;
