import { isNumber } from './isNumber';

test('isNumber asserts the input is a number, discarding other types', () => {
  const age = 15;
  const name = 'Paul Atreides';
  const planetOrigin = { name: 'Caladan', rulers: 'House Atreides' };
  const hasSpiceAddiction = false;

  expect(isNumber(age)).toBe(true);
  expect(isNumber(name)).toBe(false);
  expect(isNumber(planetOrigin)).toBe(false);
  expect(isNumber(hasSpiceAddiction)).toBe(false);
});

test('isNumber discards NaN to ease computations', () => {
  expect(isNumber(NaN)).toBe(false);
});
