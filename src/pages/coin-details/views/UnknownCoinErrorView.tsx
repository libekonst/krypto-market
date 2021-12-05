import { Link } from 'react-router-dom';
import { ImageCatalog } from '../../../assets/images/ImageCatalog';
import { routes } from '../../../routes';
import { ErrorPageScaffold } from '../../../ui-kit/layout/ErrorPageScaffold';

export function UnknownCoinErrorView() {
  return (
    <ErrorPageScaffold image={ImageCatalog.lookingFor}>
      <h1>Nope, that coin doesn't exist</h1>
      <p>Try one of these instead</p>
      <ul>
        <li>
          <Link to={routes.coin('bitcoin')}>Bitcoin</Link>
        </li>
        <li>
          <Link to={routes.coin('ethereum')}>Ethereum</Link>
        </li>
        <li>
          <Link to={routes.coin('binancecoin')}>Binance Coin</Link>
        </li>
      </ul>
      <p>
        or <Link to={routes.home()}>go back Home</Link>
      </p>
    </ErrorPageScaffold>
  );
}
