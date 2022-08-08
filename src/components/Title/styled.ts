import styled from 'styled-components';

import { rem } from 'polished';

export const Title = styled.h1`
  width: 100%;
  font-weight: 400;
  font-size: ${rem(24)};
  margin-top: ${rem(100)};
  color: ${({ theme }) => theme.colors.orange};
`;
