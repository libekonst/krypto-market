import { useCallback, useEffect, useState } from 'react';
import {
  isFailure,
  isLoading,
  isSuccess,
  useDataLoader
} from '../../lib/useDataLoader';
import { Spinner } from '../../ui-kit/feedback/Spinner';
import { LightButton } from '../../ui-kit/input/LightButton';
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
    <>
      <table style={{ marginBottom: '2rem' }}>
        <tbody>
          {accumulatedData.map((coinPrice, i) => (
            <tr
              // key={coinPrice.id} // TODO add this when using real data
              key={i}
              style={{
                backgroundColor: 'red',
                height: '80px',
                flex: 1,
                marginBottom: 10
              }}
            >
              <td>{coinPrice.name}</td>
              <td>{coinPrice.symbol}</td>
              <td>{coinPrice.id}</td>
              <td>{coinPrice.current_price}</td>
              <td>{coinPrice.low_24h}</td>
              <td>{coinPrice.high_24h}</td>
              <td>{coinPrice.price_change_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFailure(res) && <p>{res.error}</p>}
      {isLoading(res) && <Spinner />}

      {!isLoading(res) && (
        <LightButton onClick={loadMorePrices}>Load more data</LightButton>
      )}
    </>
  );
}
