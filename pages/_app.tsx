import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { initGA, logPageView } from '../utils/analytics';
import Head from 'next/head';

export default class MyApp extends App {
  componentDidMount() {
    initGA();
    logPageView();

    if (Router.router) {
      Router.router.events.on('routeChangeComplete', logPageView);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Personal Web Page</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="description" content="content" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://raw.githubusercontent.com/Oskitaa/Web/master/img/logo.png"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
