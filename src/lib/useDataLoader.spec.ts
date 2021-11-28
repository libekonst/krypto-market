import { renderHook } from '@testing-library/react-hooks';
import {
  createDataFailure,
  createDataLoading,
  createDataSuccess,
  isFailure,
  isLoading,
  isSuccess,
  useDataLoader
} from './useDataLoader';

test('isLoading asserts the input response is of type DataLoading', () => {
  const failedRes = createDataFailure('Oops');
  const successRes = createDataSuccess({});
  const loadingRes = createDataLoading();

  expect(isLoading(failedRes)).toBe(false);
  expect(isLoading(successRes)).toBe(false);
  expect(isLoading(loadingRes)).toBe(true);
});

test('isSuccess asserts the input response is of type DataSuccess', () => {
  const failedRes = createDataFailure('Oops');
  const successRes = createDataSuccess({});
  const loadingRes = createDataLoading();

  expect(isSuccess(failedRes)).toBe(false);
  expect(isSuccess(successRes)).toBe(true);
  expect(isSuccess(loadingRes)).toBe(false);
});

test('isFailure asserts the input response is of type DataFailure', () => {
  const failedRes = createDataFailure('Oops');
  const successRes = createDataSuccess({});
  const loadingRes = createDataLoading();

  expect(isFailure(failedRes)).toBe(true);
  expect(isFailure(successRes)).toBe(false);
  expect(isFailure(loadingRes)).toBe(false);
});

test('useDataLoader calls the input function', () => {
  const loadData = jest.fn();

  renderHook(() => useDataLoader(loadData));

  expect(loadData).toHaveBeenCalled();
});

test('useDataLoader returns DataLoading until the fetching fn finishes', () => {
  const loadData = jest.fn(
    () => new Promise(resolve => setTimeout(resolve, 10))
  );

  const { result } = renderHook(() => useDataLoader(loadData));

  expect(isLoading(result.current)).toBe(true);
});

test('usDataLoader returns DataSuccess with the appropriate data when the fetching fn is successful', async () => {
  const expectedData = { name: 'Paul Atreides' };
  const loadData = jest.fn(
    () => new Promise(resolve => setTimeout(() => resolve(expectedData), 10))
  );

  const { result, waitFor } = renderHook(() => useDataLoader(loadData));

  await waitFor(() => {
    expect(isSuccess(result.current)).toBe(true);
    expect(result.current.data).toEqual(expectedData);
  });
});

test('usDataLoader returns DataFailure with an error message when the fetching fn fails', async () => {
  const loadData = jest.fn(
    () => new Promise((_, reject) => setTimeout(() => reject('Ooops'), 10))
  );

  const { result, waitFor } = renderHook(() => useDataLoader(loadData));

  await waitFor(() => {
    expect(isFailure(result.current)).toBe(true);
  });
});
