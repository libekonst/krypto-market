import { shortenLink } from './shortenLink';

test('shortenLink truncates large texts', () => {
  const inputText =
    'https://www.google.com/search?q=very+very+very+very+very+very+very+very+very+big+text';
  const got = shortenLink(inputText);
  const want = 'https://www.google.com/search?q=ver...';

  expect(got).toBe(want);
});

test('shortenLink does not affect strings that are smaller than the max rendered char amount', () => {
  const inputText = 'https://www.google.com/';
  const got = shortenLink(inputText);

  expect(got).toBe(inputText);
});
