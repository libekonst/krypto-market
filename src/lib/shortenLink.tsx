const MAX_RENDERED_CHARS = 35;

export const shortenLink = (input: string) => {
  if (input.length > MAX_RENDERED_CHARS)
    return `${input.slice(0, MAX_RENDERED_CHARS)}...`;

  return input;
};
