import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Footer from '@Containers/Footer';
import Header from '@Containers/Header';

import { AuthProvider } from '@Contexts/AuthContext';

import theme from '@Theme/index';
import { GlobalStyle } from '@Theme/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
