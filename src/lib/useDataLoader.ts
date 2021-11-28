import { useEffect, useReducer } from 'react';

type DataLoading = {
  status: 'LOADING';
  error: undefined;
  data: undefined;
};

type DataSuccess<T> = {
  status: 'SUCCESS';
  error: undefined;
  data: T;
};

type DataFailure = {
  status: 'FAILURE';
  error: string;
  data: undefined;
};

type LoaderResponse<T> = DataLoading | DataFailure | DataSuccess<T>;

export const isLoading = <T>(res: LoaderResponse<T>): res is DataLoading =>
  res.status === 'LOADING';
export const isFailure = <T>(res: LoaderResponse<T>): res is DataFailure =>
  res.status === 'FAILURE';
export const isSuccess = <T>(res: LoaderResponse<T>): res is DataSuccess<T> =>
  res.status === 'SUCCESS';

const createDataLoading = () =>
  <const>{
    status: 'LOADING',
    error: undefined,
    data: undefined
  };

type Action<T> =
  | { type: 'FETCH_STARTED' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILED'; payload: string };

const createTypedReducer =
  <T>() =>
  (state: LoaderResponse<T>, action: Action<T>): LoaderResponse<T> => {
    switch (action.type) {
      case 'FETCH_FAILED':
        return { status: 'FAILURE', data: undefined, error: action.payload };
      case 'FETCH_SUCCESS':
        return { status: 'SUCCESS', data: action.payload, error: undefined };
      default:
      case 'FETCH_STARTED':
        return { status: 'LOADING', data: undefined, error: undefined };
    }
  };

export const useDataLoader = <T>(
  loadData: () => Promise<T>
): LoaderResponse<T> => {
  const [state, dispatch] = useReducer(
    createTypedReducer<T>(),
    undefined,
    createDataLoading
  );

  useEffect(() => {
    let ignoreResponse = false;

    const run = async () => {
      try {
        dispatch({ type: 'FETCH_STARTED' });
        const data = await loadData();
        if (!ignoreResponse) dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: '' });
      }
    };
    run();

    return () => {
      ignoreResponse = true;
    };
  }, [loadData]);

  return state;
};
