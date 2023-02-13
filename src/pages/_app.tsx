import { Layout } from '@libs/shared/ui/ui-kit/layout';
import type { AppProps } from 'next/app';
import '../libs/shared/styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
