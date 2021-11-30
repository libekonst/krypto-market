import { PriceChartEntries } from '../PriceChartEntries';
import { PriceChartAPIResponse } from './PriceChartAPIResponse';

type Adapter = (res: PriceChartAPIResponse) => PriceChartEntries;
export const mapToPriceChartEntries: Adapter = res =>
  res.prices.map(([name, value]) => ({
    date: new Date(name),
    price: value
  }));
