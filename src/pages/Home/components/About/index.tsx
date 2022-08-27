import React from 'react';

import * as S from './styled';

const AboutSection = () => (
  <S.AboutSectionWrapper data-testid="about-section" id="sobre">
    <S.AboutSectionTitle>Sobre mim</S.AboutSectionTitle>
    <S.AboutSectionDescription>
      Meu nome é Yago, resido na cidade de São Paulo e atualmente sou
      desenvolvedor web/mobile em uma startup do interior de SP. <br />
      <br />
      Trabalho com desenvolvimento web e mobile utilizando React, Next.js e
      React Native, possuo bagagem em implementação de ecommerce utilizando a
      plataforma VTEX, além de conhecimentos em HTML, CSS, Javascript entre
      outras ferramentas.
    </S.AboutSectionDescription>
  </S.AboutSectionWrapper>
);

export default AboutSection;
