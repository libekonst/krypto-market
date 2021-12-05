import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { MarketSharePage } from './pages/coin-market-share/MarketSharePage';
import { CoinPage } from './pages/coin-details/CoinPage';
import { NotFoundPage } from './pages/not-found/NotFoundPage';

export function RootNavigator() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<MarketSharePage />} />
        <Route path="/coin/:coinId" element={<CoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
