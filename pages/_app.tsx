/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Script from 'next/script'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";


export default function App({ Component, pageProps }: AppProps) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <React.StrictMode>

        <Component {...pageProps} />

        <Head>
          <title>PGA Auto 180</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
     
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />

          <link rel="icon" type="image/PNG" href="/Logo.png" />

         
  



        </Head>
      </React.StrictMode>,


    </>
  );
}


