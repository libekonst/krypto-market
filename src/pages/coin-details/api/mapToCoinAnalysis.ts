import { extractCoinInfo } from './extractCoinInfo';
import { CoinDetailsAPIResponse } from './CoinDetailsAPIResponse';
import { CoinAnalysis } from '../CoinAnalysis';
import { extractCommunityData } from './extractCommunityData';
import { extractMarketStatistics } from './extractMarketStatistics';

export const mapToCoinAnalysis = (
  res: CoinDetailsAPIResponse
): CoinAnalysis => ({
  ...extractCoinInfo(res),
  ...extractCommunityData(res),
  ...extractMarketStatistics(res)
});
