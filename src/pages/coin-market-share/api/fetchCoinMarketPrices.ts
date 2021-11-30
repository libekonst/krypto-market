import { mapToMarketPrice } from './mapToMarketPrice';
import { MarketPriceAPIResponse } from './MarketPriceAPIResponse';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets';
const TARGET_CURRENCY = 'USD';
const COINS_PER_PAGE = '30';
const SORT_ORDER = 'market_cap_desc';

export const fetchCoinMarketPrices = async (page = 1) => {
  const url = `${baseUrl}?vs_currency=${TARGET_CURRENCY}&order=${SORT_ORDER}&per_page=${COINS_PER_PAGE}&page=${page}&sparkline=false`;

  const res = await fetch(url);
  const data: MarketPriceAPIResponse[] = await res.json();

  return data.map(mapToMarketPrice);
};
