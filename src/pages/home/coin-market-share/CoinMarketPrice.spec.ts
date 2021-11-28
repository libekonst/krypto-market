import { isCoinMarketPrice } from './CoinMarketPrice';

test('isCoinMarketPrice asserts the input is of type CoinMarketPrice when all the required properties are met', () => {
  const coinStrict = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 54888,
    high_24h: 55426,
    low_24h: 53587,
    price_change_24h: 705.99,
    price_change_percentage_24h: 1.303,
  };

  expect(isCoinMarketPrice(coinStrict)).toBe(true);
});

test('isCoinMarketPrice asserts the input is of type CoinMarketPrice, whitelisting additional properties', () => {
  const coinStrict = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 54888,
    market_cap: 1035461296210,
    market_cap_rank: 1,
    fully_diluted_valuation: 1151456501982,
    total_volume: 33255728446,
    high_24h: 55426,
    low_24h: 53587,
    price_change_24h: 705.99,
    price_change_percentage_24h: 1.303,
    market_cap_change_24h: 5021827292,
    market_cap_change_percentage_24h: 0.48735,
    circulating_supply: 18884506,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -20.39353,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 80957.24108,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2021-11-27T11:15:11.706Z',
  };

  expect(isCoinMarketPrice(coinStrict)).toBe(true);
});

test('isCoinMarketPrice returns false when the input is missing requiredProperties', () => {
  const coinWithMissingProperties = {
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 54888,
    market_cap: 1035461296210,
    market_cap_rank: 1,
    fully_diluted_valuation: 1151456501982,
    total_volume: 33255728446,
    high_24h: 55426,
    low_24h: 53587,
    price_change_24h: 705.99,
    price_change_percentage_24h: 1.303,
    market_cap_change_24h: 5021827292,
    market_cap_change_percentage_24h: 0.48735,
    circulating_supply: 18884506,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -20.39353,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 80957.24108,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2021-11-27T11:15:11.706Z',
  };

  expect(isCoinMarketPrice(coinWithMissingProperties)).toBe(false);
});
