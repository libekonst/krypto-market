import { Link } from 'react-router-dom';
import { ImageCatalog } from '../../assets/images/ImageCatalog';
import { routes } from '../../routes';
import { ErrorPageScaffold } from '../../ui-kit/layout/ErrorPageScaffold';

export function NotFoundPage() {
  return (
    <ErrorPageScaffold image={ImageCatalog.pageNotFound}>
      <h1>This page doesn't exist</h1>
      <h2>How did you end up here?</h2>
      <Link to={routes.home()}>Back to Home</Link>
    </ErrorPageScaffold>
  );
}
