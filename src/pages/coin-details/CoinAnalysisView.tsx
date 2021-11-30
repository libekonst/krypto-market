import { Row } from '../../ui-kit/layout/Row';
import { MarketStatisticsBox } from './market-statistics/MarketStatisticsBox';
import { PriceChart } from './PriceChart';
import { CommunityCard } from './community-data/CommunityCard';
import { HeaderBackButton } from './HeaderBackButton';
import { CoinAnalysis } from './CoinAnalysis';
import styled from 'styled-components';

type Props = {
  coin: CoinAnalysis;
};
export function CoinAnalysisView({ coin }: Props) {
  return (
    <Wrapper>
      <BackButtonPositioner>
        <HeaderBackButton />
      </BackButtonPositioner>
      <Row crossAxis="flex-start">
        <MarketStatisticsBox coinAnalysis={coin} />
        <CommunityCard coinAnalysis={coin} />
      </Row>
      <PriceChart />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 1rem 3rem;
`;

const BackButtonPositioner = styled.div`
  padding: 5;
`;
