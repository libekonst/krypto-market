import { Row } from '../../../ui-kit/layout/Row';
import { PriceMetricLabel } from './PriceMetricLabel';

type Props = {
  priceChangePercentage7d?: string;
  priceChangePercentage14d?: string;
  priceChangePercentage30d?: string;
  priceChangePercentage60d?: string;
  priceChangePercentage200d?: string;
  priceChangePercentage1y?: string;
  dailyHighestPrice?: string;
  dailyLowestPrice?: string;
  allTimeHighestPrice?: string;
  allTimeHighestDate?: string;
  allTimeLowestPrice?: string;
  allTimeLowestDate?: string;
};

export function AdditionalMarketData(props: Props) {
  const {
    dailyHighestPrice,
    dailyLowestPrice,
    allTimeHighestDate,
    allTimeHighestPrice,
    allTimeLowestDate,
    allTimeLowestPrice,
    priceChangePercentage7d,
    priceChangePercentage14d,
    priceChangePercentage30d,
    priceChangePercentage60d,
    priceChangePercentage200d,
    priceChangePercentage1y
  } = props;

  return (
    <Row style={{ marginTop: '2rem' }}>
      {dailyHighestPrice && (
        <PriceMetricLabel label="Daily Highest" value={dailyHighestPrice} />
      )}

      {dailyLowestPrice && (
        <PriceMetricLabel label="Daily Lowest" value={dailyLowestPrice} />
      )}

      {allTimeHighestPrice && (
        <PriceMetricLabel
          label="All Time Highest"
          value={
            allTimeHighestDate
              ? `${allTimeHighestPrice} - ${allTimeHighestDate}`
              : allTimeHighestPrice
          }
        />
      )}

      {allTimeLowestPrice && (
        <PriceMetricLabel
          label="All Time Lowest"
          value={
            allTimeLowestDate
              ? `${allTimeLowestPrice} - ${allTimeLowestDate}`
              : allTimeLowestPrice
          }
        />
      )}

      {priceChangePercentage7d && (
        <PriceMetricLabel label="Week change" value={priceChangePercentage7d} />
      )}

      {priceChangePercentage14d && (
        <PriceMetricLabel
          label="Two-Week change"
          value={priceChangePercentage14d}
        />
      )}
      {priceChangePercentage30d && (
        <PriceMetricLabel
          label="Month change"
          value={priceChangePercentage30d}
        />
      )}
      {priceChangePercentage60d && (
        <PriceMetricLabel
          label="Two-Month change"
          value={priceChangePercentage60d}
        />
      )}
      {priceChangePercentage200d && (
        <PriceMetricLabel
          label="Half-Year change"
          value={priceChangePercentage200d}
        />
      )}
      {priceChangePercentage1y && (
        <PriceMetricLabel label="Year change" value={priceChangePercentage1y} />
      )}
    </Row>
  );
}
