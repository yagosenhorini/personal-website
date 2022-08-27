import { rem } from 'polished';
import styled from 'styled-components';

export const Subtitle = styled.h3<{ isBigger?: boolean }>`
  margin-top: ${rem(24)};
  color: ${({ theme }) => theme.colors.darkBlue};
  width: ${({ isBigger }) => (isBigger ? rem(287) : `100%`)};
  font-size: ${({ isBigger }) => (isBigger ? rem(72) : rem(24))};
  line-height: ${({ isBigger }) => (isBigger ? rem(69) : rem(45))};
`;
