import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Home from '@Pages/Home';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Yago dos Santos Senhorini - Desenvolvedor Front End</title>
    </Head>
    <Home />
  </>
);

export default HomePage;
