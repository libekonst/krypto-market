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
import { getCoinMarketPrices } from './api';
import { CoinMarketPrice } from './CoinMarketPrice';

export function PriceTable() {
  const [paginationCount, setPaginationCount] = useState(1);
  const loadMorePrices = () => setPaginationCount(prevCount => prevCount + 1);
  const getData = useCallback(
    () => getCoinMarketPrices(paginationCount),
    [paginationCount]
  );
  const res = useDataLoader(getData);

  const [accumulatedData, setAccumulatedData] = useState<CoinMarketPrice[]>([]);
  useEffect(() => {
    if (isSuccess(res)) setAccumulatedData(prev => [...prev, ...res.data]);
  }, [res]);

  return (
    <Wrapper>
      {accumulatedData.map((coin, i) => (
        <Link key={i} href={`/${coin.id}`}>
          <Row mainAxis="space-between">
            <Row>
              <CoinThumb src={coin.image} />
              <NamePriceBox
                name={coin.name}
                symbol={coin.symbol}
                currentPrice={`${coin.current_price}`}
                percentageChange={`${coin.price_change_percentage_24h}`}
              />
            </Row>
            <Column mainAxis="space-evenly" crossAxis="flex-end">
              <PriceMetricLabel
                label="Daily Lowest"
                value={`${coin.low_24h}`}
              />
              <PriceMetricLabel
                label="Daily Highest"
                value={`${coin.high_24h}`}
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
  max-width: 70vw;
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
