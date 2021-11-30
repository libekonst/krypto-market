import { formatPercentage, formatPrice } from '../../../lib/formatters';
import { MarketPrice } from '../MarketPrice';
import { MarketPriceAPIResponse } from './MarketPriceAPIResponse';

export const mapToMarketPrice = (res: MarketPriceAPIResponse): MarketPrice => {
  return {
    id: res.id,
    name: res.name,
    image: res.image,
    symbol: res.symbol,
    currentPrice: formatPrice(res.current_price) ?? '',
    priceChange24h: formatPrice(res.price_change_24h) ?? '',
    priceChangePercentage24h:
      formatPercentage(res.price_change_percentage_24h) ?? '',
    dailyHighestPrice: formatPrice(res.high_24h) ?? '',
    dailyLowestPrice: formatPrice(res.low_24h) ?? ''
  };
};
