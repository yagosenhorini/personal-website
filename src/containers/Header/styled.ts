import styled from 'styled-components';

import { rem } from 'polished';

export const Header = styled.header`
  width: 100%;
  padding: 5%;
  display: flex;
  height: ${rem(36)};
  background-color: ${({ theme }) => theme.colors.main};

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    padding: 0;
  `}
`;
