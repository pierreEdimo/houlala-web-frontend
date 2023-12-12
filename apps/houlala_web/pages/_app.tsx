import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import React from "react";
import Head from "next/head";
import '@fortawesome/fontawesome-svg-core/styles.css'
import AppBar from '../components/app-bar/app.bar';
import BottomBar from "../components/bottom-bar/bottom.bar";
import MobileUserPage from "../components/user-page/mobile.user.page";

function MyApp({Component, pageProps}: AppProps) {

    const title = "Houlala";


    return (
        <RecoilRoot>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{title}</title>
            </Head>
            <MobileUserPage/>
            <AppBar title={"Houla la"}/>
            <Component {...pageProps}/>
            <BottomBar/>
        </RecoilRoot>
    );
}

export default MyApp
