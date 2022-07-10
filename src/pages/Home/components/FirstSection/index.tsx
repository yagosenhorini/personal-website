import React from 'react';

import Title from '@Components/Title';

import * as S from './styled';

const FirstSection = () => (
  <S.FirstSectionWrapper>
    <S.ColumnContent>
      <Title text="Olá, seja bem vindo" />
    </S.ColumnContent>
  </S.FirstSectionWrapper>
);

export default FirstSection;
