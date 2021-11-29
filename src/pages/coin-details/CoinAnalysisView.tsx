import { Row } from '../../ui-kit/layout/Row';
import { MarketStatisticsBox } from './market-statistics/MarketStatisticsBox';
import { PriceChart } from './PriceChart';
import { SocialsBox } from './SocialsBox';
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
      <Row>
        <MarketStatisticsBox coinAnalysis={coin} />
      </Row>
      <Row>
        <SocialsBox />
      </Row>
      <PriceChart />
    </>
  );
}
