import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {theme} from '../src/presentation/theme/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <CssBaseline />
    </ThemeProvider>
  )
];
