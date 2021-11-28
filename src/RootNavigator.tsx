import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { CoinPage } from './pages/coin-details/CoinPage';
import { NotFoundPage } from './pages/not-found/NotFoundPage';

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="coins/:coinId" element={<CoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
