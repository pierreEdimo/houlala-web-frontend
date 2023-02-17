import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import NestedLayout from "../components/nested-layout/nested.layout";
import { RecoilRoot } from "recoil";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Houla la pour Business</title>
      </Head>
      <NestedLayout>
        <Component {...pageProps} />
      </NestedLayout>
    </RecoilRoot>
  );
}

export default MyApp;
