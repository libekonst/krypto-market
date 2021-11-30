import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MarketSharePage } from './pages/coin-market-share/MarketSharePage';
import { CoinPage } from './pages/coin-details/CoinPage';
import { NotFoundPage } from './pages/not-found/NotFoundPage';

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MarketSharePage />} />
        <Route path=":coinId" element={<CoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
