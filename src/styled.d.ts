import 'styled-components';
import { Theme } from './ui-kit/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
