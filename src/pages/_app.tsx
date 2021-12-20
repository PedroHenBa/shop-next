import type { AppProps } from 'next/app';
import { FC } from 'react';
import 'keen-slider/keen-slider.min.css';
import '../styles/main.css';

import { UiContext } from '@components/ui/UiContext';

const Noop: FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <UiContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiContext>
  );
}

export default App;
