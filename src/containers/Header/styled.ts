import styled from 'styled-components';

import { rem } from 'polished';

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: ${rem(36)};
  background-color: ${({ theme }) => theme.colors.main};
`;
