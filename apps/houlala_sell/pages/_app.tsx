import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import DefaultLayout from "../components/default-layout/default.layout";


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <RecoilRoot>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Houla la pour Business</title>
            </Head>

            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>

        </RecoilRoot>
    );
}

export default MyApp;
