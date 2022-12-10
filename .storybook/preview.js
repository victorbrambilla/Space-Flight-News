 import { CssBaseline } from '@mui/material';
 import { Layout } from '../src/presentation/components/Layout';

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
    <Layout>
      <Story />
      <CssBaseline />
    </Layout>
  )
];
