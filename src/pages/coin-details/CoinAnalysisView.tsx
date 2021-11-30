import { Row } from '../../ui-kit/layout/Row';
import { MarketStatisticsBox } from './market-statistics/MarketStatisticsBox';
import { PriceChart } from './PriceChart';
import { CommunityCard } from './community-data/CommunityCard';
import { HeaderBackButton } from './HeaderBackButton';
import { CoinAnalysis } from './CoinAnalysis';

type Props = {
  coin: CoinAnalysis;
};
export function CoinAnalysisView({ coin }: Props) {
  return (
    <>
      <Row style={{ padding: 5 }}>
        <HeaderBackButton />
      </Row>

      <div>{coin.id}</div>
      <Row crossAxis="flex-start">
        <MarketStatisticsBox coinAnalysis={coin} />
        <CommunityCard coinAnalysis={coin} />
      </Row>
      <PriceChart />
    </>
  );
}
