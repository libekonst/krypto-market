export type CoinInfo = {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb?: string;
    small?: string;
    large?: string;
  };
  description?: string;
};
