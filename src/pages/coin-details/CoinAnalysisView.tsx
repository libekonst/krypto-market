import { Row } from '../../ui-kit/layout/Row';
import { MarketStatisticsBox } from './market-statistics/MarketStatisticsBox';
import { CommunityCard } from './community-data/CommunityCard';
import { HeaderBackButton } from './HeaderBackButton';
import { CoinAnalysis } from './CoinAnalysis';
import styled from 'styled-components';
import { Column } from '../../ui-kit/layout/Column';
import { PriceChart } from './price-chart/PriceChart';
import { DescriptionBox } from './DescriptionBox';

type Props = {
  coin: CoinAnalysis;
};
export function CoinAnalysisView({ coin }: Props) {
  return (
    <Column crossAxis="stretch">
      <BackButtonPositioner>
        <HeaderBackButton />
      </BackButtonPositioner>
      <ContentPositioner>
        <Row crossAxis="flex-start" mainAxis="space-between">
          <Column style={{ maxWidth: '45vw' }}>
            <MarketStatisticsBox coinAnalysis={coin} />
            {coin.description && (
              <DescriptionBox>{coin.description}</DescriptionBox>
            )}
          </Column>
          <CommunityCard coinAnalysis={coin} />
        </Row>
        <PriceChart coinId={coin.id} />
      </ContentPositioner>
    </Column>
  );
}

const BackButtonPositioner = styled.div`
  margin: 1rem;
`;

const ContentPositioner = styled.div`
  padding: 0 10rem 10rem;
`;
