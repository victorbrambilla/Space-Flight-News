import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import { CssBaseline } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main
        style={{
          maxWidth: '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
    </ThemeProvider>
  );
};
