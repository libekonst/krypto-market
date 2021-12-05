import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  isFailure,
  isLoading,
  isSuccess,
  useDataLoader
} from '../../lib/useDataLoader';
import { Spinner } from '../../ui-kit/feedback/Spinner';
import { LightButton } from '../../ui-kit/input/LightButton';
import { Column } from '../../ui-kit/layout/Column';
import { Row } from '../../ui-kit/layout/Row';
import { PriceMetricLabel } from '../PriceMetricLabel';
import { CoinThumb } from '../CoinThumb';
import { NamePriceBox } from '../NamePriceBox';
import { fetchCoinMarketPrices } from './api/fetchCoinMarketPrices';
import { MarketPrice } from './MarketPrice';
import { routes } from '../../routes';

export function PriceTable() {
  const [paginationCount, setPaginationCount] = useState(1);
  const loadMorePrices = () => setPaginationCount(prevCount => prevCount + 1);
  const getData = useCallback(
    () => fetchCoinMarketPrices(paginationCount),
    [paginationCount]
  );
  const res = useDataLoader(getData);

  const [accumulatedData, setAccumulatedData] = useState<MarketPrice[]>([]);
  useEffect(() => {
    if (isSuccess(res)) setAccumulatedData(prev => [...prev, ...res.data]);
  }, [res]);

  return (
    <Wrapper>
      {accumulatedData.map((coin, i) => (
        <Link key={i} href={routes.coin(coin.id)}>
          <Row mainAxis="space-between">
            <Row>
              <CoinThumb src={coin.image} />
              <NamePriceBox
                name={coin.name}
                symbol={coin.symbol}
                currentPrice={coin.currentPrice}
                percentageChange={coin.priceChangePercentage24h}
              />
            </Row>
            <Column mainAxis="space-evenly" crossAxis="flex-end">
              <PriceMetricLabel
                label="Daily Lowest"
                value={coin.dailyLowestPrice}
              />
              <PriceMetricLabel
                label="Daily Highest"
                value={coin.dailyHighestPrice}
              />
            </Column>
          </Row>
        </Link>
      ))}

      {isFailure(res) && <p>{res.error}</p>}
      {isLoading(res) && <Spinner />}

      {!isLoading(res) && (
        <LightButton onClick={loadMorePrices}>Load more data</LightButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 70vmax;
  margin: auto;
  padding-bottom: 7rem;
  margin-top: 3rem;
`;

const Link = styled.a`
  display: block;
  background-color: transparent;
  transition: filter 0.1s linear;
  text-decoration: none;
  margin-bottom: 1.5rem;
  color: inherit;
  border-bottom: 1px solid ${props => props.theme.colors.lightShade};

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
