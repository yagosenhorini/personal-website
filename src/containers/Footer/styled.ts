import { rem } from 'polished';
import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  height: ${rem(70)};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
