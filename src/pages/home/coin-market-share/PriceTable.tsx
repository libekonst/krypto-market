import { useEffect, useState } from 'react';
import { Spinner } from '../../../ui-kit/feedback/Spinner';
import { Row } from '../../../ui-kit/layout/Row';
import { getCoinMarketPrices } from './api';
import { CoinMarketPrice } from './CoinMarketPrice';

export function PriceTable() {
  const [data, setData] = useState<CoinMarketPrice[]>([]);
  const [paginationCount, setPaginationCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(undefined);
      try {
        const additionalPrices = await getCoinMarketPrices(paginationCount);
        setData(prev => [...prev, ...additionalPrices]);
      } catch (error) {
        if (isError(error)) setError(error.message);
        else setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [paginationCount]);

  const loadMorePrices = () => setPaginationCount(prevCount => prevCount + 1);

  return (
    <>
      <table>
        <tbody>
          {data.map((coinPrice, i) => (
            <tr
              // key={coinPrice.id} // TODO add this when using real data
              key={i}
              style={{
                backgroundColor: 'red',
                height: '80px',
                flex: 1,
                marginBottom: 10,
              }}
            >
              <td>{coinPrice.name}</td>
              <td>{coinPrice.symbol}</td>
              <td>{coinPrice.current_price}</td>
              <td>{coinPrice.low_24h}</td>
              <td>{coinPrice.high_24h}</td>
              <td>{coinPrice.price_change_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p>{error}</p>}

      {isLoading && <Spinner />}

      <button onClick={loadMorePrices}>MOAR</button>
    </>
  );
}

const isError = (error: unknown): error is Error =>
  (error as any)?.message !== undefined;
