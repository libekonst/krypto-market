import { Link } from 'react-router-dom';
import { ImageCatalog } from '../../../assets/images/ImageCatalog';
import { ErrorPageScaffold } from '../../../ui-kit/layout/ErrorPageScaffold';

export function SomethingWentWrong() {
  return (
    <ErrorPageScaffold image={ImageCatalog.somethingWentWrong}>
      <h1>Something went wrong</h1>
      <h2>It's not you, it's us</h2>
      <Link to="/">Go back Home</Link>
    </ErrorPageScaffold>
  );
}
