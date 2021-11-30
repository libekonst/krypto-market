import { CoinDetailsAPIResponse } from './CoinDetailsAPIResponse';
import { mapToCoinAnalysis } from './mapToCoinAnalysis';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';
const WANTS_LOCALIZATION = 'false';
const WANTS_TICKERS = 'false';
const WANTS_SPARKLINE = 'false';

export const fetchCoinDetails = async (id?: string) => {
  if (!id) throw new Error('No coin id');

  const url = `${BASE_URL}/${id}?localization=${WANTS_LOCALIZATION}&tickers=${WANTS_TICKERS}&sparkline=${WANTS_SPARKLINE}`;
  const res = await fetch(url);
  const data: CoinDetailsAPIResponse = await res.json();

  return mapToCoinAnalysis(data);
};
