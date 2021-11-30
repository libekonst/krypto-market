const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const percentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long'
});

export const formatPrice = (x?: number | null) => {
  if (!x) return;

  return currencyFormatter.format(x);
};
export const formatPercentage = (x?: number | null) => {
  if (!x) return;

  return percentageFormatter.format(x / 100);
};

export const formatDate = (dateISO?: string | null) => {
  if (!dateISO) return;

  return dateFormatter.format(new Date(dateISO));
};
