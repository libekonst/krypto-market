import { useEffect, useReducer } from 'react';

type DataLoading = {
  isLoading: true;
  error: undefined;
  data: undefined;
};

type DataSuccess<T> = {
  isLoading: false;
  error: undefined;
  data: T;
};

type DataFailure = {
  isLoading: false;
  error: string;
  data: undefined;
};

type LoaderResponse<T> = DataLoading | DataFailure | DataSuccess<T>;

export const isLoading = <T>(res: LoaderResponse<T>): res is DataLoading =>
  res.isLoading && !res.data && !res.error;
export const isFailure = <T>(res: LoaderResponse<T>): res is DataFailure =>
  !res.isLoading && !res.data && res.error !== undefined;
export const isSuccess = <T>(res: LoaderResponse<T>): res is DataSuccess<T> =>
  !res.isLoading && res.data !== undefined && !res.error;

export const createDataLoading = (): DataLoading => ({
  isLoading: true,
  error: undefined,
  data: undefined
});
export const createDataFailure = (error: string): DataFailure => ({
  isLoading: false,
  error,
  data: undefined
});

export const createDataSuccess = <T>(data: T): DataSuccess<T> => ({
  isLoading: false,
  error: undefined,
  data
});

type Action<T> =
  | { type: 'FETCH_STARTED' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILED'; payload: string };

const createTypedReducer =
  <T>() =>
  (state: LoaderResponse<T>, action: Action<T>): LoaderResponse<T> => {
    switch (action.type) {
      case 'FETCH_FAILED':
        return createDataFailure(action.payload);
      case 'FETCH_SUCCESS':
        return createDataSuccess(action.payload);
      default:
      case 'FETCH_STARTED':
        return createDataLoading();
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
