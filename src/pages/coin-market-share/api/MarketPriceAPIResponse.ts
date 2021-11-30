import { isNumber } from '../../../lib/isNumber';
import { isString } from '../../../lib/isString';

export type MarketPriceAPIResponse = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
};

export const isMarketPriceAPIResponse = (
  data: any
): data is MarketPriceAPIResponse => {
  return (
    'id' in data &&
    'symbol' in data &&
    'name' in data &&
    'image' in data &&
    'current_price' in data &&
    'high_24h' in data &&
    'low_24h' in data &&
    'price_change_24h' in data &&
    'price_change_percentage_24h' in data &&
    isString(data['id']) &&
    isString(data['symbol']) &&
    isString(data['name']) &&
    isString(data['image']) &&
    isNumber(data['current_price']) &&
    isNumber(data['high_24h']) &&
    isNumber(data['low_24h']) &&
    isNumber(data['price_change_24h']) &&
    isNumber(data['price_change_percentage_24h'])
  );
};
