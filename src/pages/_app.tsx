import type { AppProps } from 'next/app';
import '../assets/styles/globals.scss';
import { Layout } from '../libs/shared/ui/ui-kit/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
