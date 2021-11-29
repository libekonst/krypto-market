import { CommunityData } from './community-data/CommunityData';
import { CoinInfo } from './coin-info/CoinInfo';
import { MarketStatisticsUSD } from './market-statistics/MarketStatisticsUSD';

export type CoinAnalysis = CoinInfo & CommunityData & MarketStatisticsUSD;
