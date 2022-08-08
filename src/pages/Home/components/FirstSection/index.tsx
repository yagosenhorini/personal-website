import React from 'react';

import Title from '@Components/Title';
import Subtitle from '@Components/Subtitle';

import * as S from './styled';

const FirstSection = () => (
  <S.FirstSectionWrapper>
    <S.ColumnContent>
      <Title text="Olá, seja bem vindo" />
      <Subtitle isBigger content="Eu sou Yago ;)" />
    </S.ColumnContent>
  </S.FirstSectionWrapper>
);

export default FirstSection;
