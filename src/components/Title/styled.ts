import styled from 'styled-components';

import { rem } from 'polished';

export const Title = styled.h1`
  font-size: ${rem(24)};
  color: ${({ theme }) => theme.colors.orange};
`;
