import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../presentation/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Space Flight News</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
