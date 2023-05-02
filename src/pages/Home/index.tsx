import React from 'react';
import Carousel from 'react-multi-carousel';

import {
  aboutDescription,
  curiosities,
  responsive,
  textDescription,
} from '@Constants/index';

import AboutSection from './components/About';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

import * as S from './styled';

const Home = () => (
  <S.HomeWrapper>
    <S.Hero>
      <FirstSection />
      <SecondSection description={textDescription} />
    </S.Hero>
    <Carousel responsive={responsive} infinite ssr>
      <AboutSection title="Sobre mim" aboutDescription={aboutDescription} />
      <AboutSection title="Curiosidades" aboutDescription={curiosities} />
    </Carousel>
  </S.HomeWrapper>
);

export default Home;
