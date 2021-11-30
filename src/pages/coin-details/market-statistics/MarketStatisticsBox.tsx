import styled from 'styled-components';
import { Row } from '../../../ui-kit/layout/Row';
import { AdditionalMarketData } from './AdditionalMarketData';
import { CoinAnalysis } from '../CoinAnalysis';
import { CoinThumb } from './CoinThumb';
import { NamePriceBox } from './NamePriceBox';

type Props = {
  coinAnalysis: CoinAnalysis;
};
export function MarketStatisticsBox({ coinAnalysis }: Props) {
  return (
    <WrapperBox>
      <Row>
        <CoinThumb src={coinAnalysis.image.large} />
        <NamePriceBox
          name={coinAnalysis.name}
          symbol={coinAnalysis.symbol}
          currentPrice={coinAnalysis.currentPrice}
          percentageChange={coinAnalysis.priceChangePercentage24h}
        />
      </Row>
      <AdditionalMarketData
        priceChangePercentage7d={coinAnalysis.priceChangePercentage7d}
        priceChangePercentage14d={coinAnalysis.priceChangePercentage14d}
        priceChangePercentage30d={coinAnalysis.priceChangePercentage30d}
        priceChangePercentage60d={coinAnalysis.priceChangePercentage60d}
        priceChangePercentage200d={coinAnalysis.priceChangePercentage200d}
        priceChangePercentage1y={coinAnalysis.priceChangePercentage1y}
        dailyHighestPrice={coinAnalysis.dailyHighestPrice}
        dailyLowestPrice={coinAnalysis.dailyLowestPrice}
        allTimeHighestPrice={coinAnalysis.allTimeHighestPrice}
        allTimeHighestDate={coinAnalysis.allTimeHighestDate}
        allTimeLowestPrice={coinAnalysis.allTimeLowestPrice}
        allTimeLowestDate={coinAnalysis.allTimeLowestDate}
      />
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  flex: 1;
  padding: 1rem;
`;
