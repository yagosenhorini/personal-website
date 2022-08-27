import React from 'react';
import { NextPage } from 'next';

import Home from '@Pages/Home';
import Head from 'next/head';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Yago dos Santos Senhorini - Desenvolvedor Front End</title>
      <link rel="preconnect" href="https://use.typekit.net/" />
      <link rel="stylesheet" href="https://use.typekit.net/nyq4zlo.css" />
    </Head>
    <Home />;
  </>
);

export default HomePage;
