import React from 'react';
import AboutSection from './components/About';

import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

import * as S from './styled';

const Home = () => (
  <S.HomeWrapper>
    <S.Hero>
      <FirstSection />
      <SecondSection />
    </S.Hero>
    <AboutSection />
  </S.HomeWrapper>
);

export default Home;
