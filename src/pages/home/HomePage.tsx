import { PriceTable } from './coin-market-share/PriceTable';

export function HomePage() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  return (
    <div style={{ padding: '1rem 5rem' }}>
      <h1>Main Content</h1>
      <PriceTable />
    </div>
  );
}
