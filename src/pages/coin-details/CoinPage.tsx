import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export function CoinPage() {
  const { coinId } = useParams();

  return (
    <>
      <Link to="/"> ← </Link>

      <div>{coinId}</div>
    </>
  );
}
