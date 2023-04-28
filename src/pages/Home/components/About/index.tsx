import React from 'react';

import * as S from './styled';

const AboutSection = () => (
  <S.AboutSectionWrapper data-testid="about-section" id="about">
    <S.AboutSectionTitle>Sobre mim</S.AboutSectionTitle>
    <S.AboutSectionDescription>
      Meu nome é Yago, resido na cidade de São Paulo e atualmente sou
      desenvolvedor de aplicativos dentro do universo Jira.
      <br />
      <br />
      Possuo experiência com desenvolvimento web e mobile utilizando React,
      Next.js e React Native, possuo bagagem em implementação de ecommerce
      utilizando a plataforma VTEX, além de conhecimentos em HTML, CSS,
      Javascript entre outras ferramentas.
    </S.AboutSectionDescription>
  </S.AboutSectionWrapper>
);

export default AboutSection;
