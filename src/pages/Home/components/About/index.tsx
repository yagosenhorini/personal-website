import React from 'react';

import * as S from './styled';

type IAboutSectionData = {
  title: string;
  aboutDescription: string;
};

const AboutSection = ({ title, aboutDescription }: IAboutSectionData) => (
  <S.AboutSectionWrapper data-testid="about-section" id="about">
    <S.AboutSectionTitle>{title}</S.AboutSectionTitle>
    <S.AboutSectionDescription
      dangerouslySetInnerHTML={{ __html: aboutDescription }}
    />
  </S.AboutSectionWrapper>
);

export default AboutSection;
