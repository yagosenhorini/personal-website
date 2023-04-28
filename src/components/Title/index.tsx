import React from 'react';

import { TitleProps } from '@Interfaces/Title';

import * as S from './styled';

const Title = ({ text, id, testId }: TitleProps) => (
  <S.Title id={id} data-testid={testId}>
    {text}
  </S.Title>
);

export default Title;
