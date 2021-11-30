import { ThemeProvider } from 'styled-components';
import './App.css';
import { AppHeader } from './AppHeader';
import { RootNavigator } from './RootNavigator';
import { theme } from './ui-kit/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <RootNavigator />
    </ThemeProvider>
  );
}
