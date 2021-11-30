import { ChartDurationIncrements } from '../ChartDurationIncrements';
import { mapDurationIncrementToDaysParam } from './mapDurationIncrementToAPIParam';
import { mapToPriceChartEntries } from './mapToPriceChartEntries';
import { PriceChartAPIResponse } from './PriceChartAPIResponse';

const BASE_URL = `https://api.coingecko.com/api/v3/coins`;
const TARGET_CURRENCY = 'usd';

export const fetchPriceChartData = async (
  coinId: string,
  increment: ChartDurationIncrements
) => {
  const days = mapDurationIncrementToDaysParam(increment);

  const url = `${BASE_URL}/${coinId}/market_chart?vs_currency=${TARGET_CURRENCY}&days=${days}`;
  const res = await fetch(url);
  const data: PriceChartAPIResponse = await res.json();

  return mapToPriceChartEntries(data);
};
