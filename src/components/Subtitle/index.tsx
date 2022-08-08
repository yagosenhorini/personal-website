import React from 'react';

import { SubtitleProps } from '@/interfaces/Subtitle';

import * as S from './styled';

const Subtitle = ({ isBigger, content }: SubtitleProps) => (
  <S.Subtitle isBigger={isBigger}>{content}</S.Subtitle>
);

export default Subtitle;
