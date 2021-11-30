import { useParams } from 'react-router';
import { useCallback } from 'react';
import { fetchCoinDetails } from './api/fetchCoinDetails';
import { UnknownCoinErrorView } from './views/UnknownCoinErrorView';
import { isFailure, isLoading, useDataLoader } from '../../lib/useDataLoader';
import { CoinAnalysisView } from './CoinAnalysisView';
import { SomethingWentWrong } from './views/SomethingWentWrongView';
import { Spinner } from '../../ui-kit/feedback/Spinner';

export function CoinPage() {
  const { coinId } = useParams();

  const loadData = useCallback(() => fetchCoinDetails(coinId), [coinId]);
  const res = useDataLoader(loadData);

  if (isFailure(res) && res.error === 'No coin id')
    return <UnknownCoinErrorView />;
  if (isFailure(res)) return <SomethingWentWrong />;
  if (isLoading(res)) return <Spinner />;
  return <CoinAnalysisView coin={res.data} />;
}
