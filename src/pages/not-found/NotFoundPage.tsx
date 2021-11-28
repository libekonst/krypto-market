import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <p>How did you end up here?</p>
      <Link to="/">Go Home</Link>
    </>
  );
}
