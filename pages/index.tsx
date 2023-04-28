import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Home from '@Pages/Home';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Yago dos Santos Senhorini - Desenvolvedor Front End</title>
      <link rel="preconnect" href="https://use.typekit.net/" />
      <link rel="stylesheet" href="https://use.typekit.net/nyq4zlo.css" />
    </Head>
    <Home />
  </>
);

export default HomePage;
