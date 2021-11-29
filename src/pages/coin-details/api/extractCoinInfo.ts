import { CoinDetailsAPIResponse } from './CoinDetailsAPIResponse';
import { CoinInfo } from '../coin-info/CoinInfo';

export const extractCoinInfo = (res: CoinDetailsAPIResponse): CoinInfo => {
  return {
    id: res.id ?? '',
    symbol: res.symbol ?? '',
    name: res.name ?? '',
    image: {
      thumb: res.image?.thumb ?? undefined,
      small: res.image?.small ?? undefined,
      large: res.image?.large ?? undefined
    },
    description: res.description?.en ?? undefined
  };
};
