import { ThemeProvider, useMediaQuery } from '@mui/material';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import '../assets/styles/globals.scss';
import { getTheme } from '../libs/shared/ui/styles';
import { Layout } from '../libs/shared/ui/ui-kit/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => getTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
