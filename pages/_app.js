import App from 'next/app';
import React, { useEffect } from 'react';
import * as Fathom from 'fathom-client';
import Router from 'next/router';

import '../css/index.css';

import Layout from '../components/Layout';

// Records a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

class MyApp extends App {
  // Initialize Fathom when the app loads
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('VLHUFYGD');
      Fathom.trackPageview();
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
