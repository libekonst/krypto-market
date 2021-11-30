export const formatPrice = (x?: number | null) => {
  if (!x) return;
  return withUsdCurrency(roundAndStringify(x));
};
export const formatPercentage = (x?: number | null) => {
  if (!x) return;
  return withPercentage(roundAndStringify(x));
};
export const formatDate = (dateISO?: string | null) =>
  dateISO ? new Date(dateISO).toDateString() : undefined;
const roundAndStringify = (x: number) => {
  if (Number.isInteger(x)) return `${x}`;

  return `${x.toFixed(1)}`;
};
const withUsdCurrency = (x: string) => `$${x}`;
const withPercentage = (x: string) => `${x}%`;
