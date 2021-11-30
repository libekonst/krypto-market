const MAX_RENDERED_CHARS = 35;
const ELLIPSIS = '...';

export const shortenLink = (input: string) => {
  if (input.length <= MAX_RENDERED_CHARS) return input;

  const shortenedText = input.slice(0, MAX_RENDERED_CHARS);
  return `${shortenedText}${ELLIPSIS}`;
};
