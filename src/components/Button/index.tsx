import React from 'react';

import { ButtonProps } from '@Interfaces/Button';

import * as S from './styled';

const Button = ({ children, type, ...props }: ButtonProps) => (
  <S.Button type={type} {...props}>
    {children}
  </S.Button>
);

export default Button;
