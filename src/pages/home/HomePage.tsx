import { Row } from '../../ui-kit/layout/Row';
import { PriceTable } from './coin-market-share/PriceTable';

export function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <div
      style={{
        padding: '1rem 7rem 1rem 4rem',
        backgroundColor: 'cyan',
        position: 'sticky',
        top: 0,
      }}
    >
      <Row mainAxis="space-between">
        <Logo />
        <button>Log in</button>
      </Row>
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{ width: '200px', height: '45px', backgroundColor: 'darkblue' }}
    ></div>
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
