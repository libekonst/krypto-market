import { useParams } from 'react-router';
import { useCallback } from 'react';
import { fetchCoinDetails } from './api/fetchCoinDetails';
import { UnknownCoinErrorView } from './views/UnknownCoinErrorView';
import { SkeletonLoadingView } from './views/SkeletonLoadingView';
import { isFailure, isLoading, useDataLoader } from '../../lib/useDataLoader';
import { CoinAnalysisView } from './CoinAnalysisView';
import { SomethingWentWrong } from './views/SomethingWentWrongView';

export function CoinPage() {
  const { coinId } = useParams();

  const loadData = useCallback(() => fetchCoinDetails(coinId), [coinId]);
  const res = useDataLoader(loadData);

  if (isFailure(res) && res.error === 'No coin id')
    return <UnknownCoinErrorView />;
  if (isFailure(res)) return <SomethingWentWrong />;
  if (isLoading(res)) return <SkeletonLoadingView />;
  return <CoinAnalysisView coin={res.data} />;
}
