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
          backgroundImage:
            'url(https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {children}
      </main>
    </ThemeProvider>
  );
};
