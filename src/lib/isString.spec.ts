import { isString } from './isString';

test('isString asserts the input is a string', () => {
  const age = 15;
  const name = 'Paul Atreides';
  const planetOrigin = { name: 'Caladan', rulers: 'House Atreides' };
  const hasSpiceAddiction = false;

  expect(isString(age)).toBe(false);
  expect(isString(name)).toBe(true);
  expect(isString(planetOrigin)).toBe(false);
  expect(isString(planetOrigin.name)).toBe(true);
  expect(isString(planetOrigin.rulers)).toBe(true);
  expect(isString(hasSpiceAddiction)).toBe(false);
});
