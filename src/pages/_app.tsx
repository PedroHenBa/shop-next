import type { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/main.css';

function App({ Component, pageProps }: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout;

  if (!Layout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;