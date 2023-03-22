import styled from 'styled-components';

import { rem } from 'polished';

export const FirstSectionWrapper = styled.section`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding: ${rem(10)};
  justify-content: space-between;

  ${({ theme }) => theme.mq.greaterThan('sm')`
    width: 100%;
    padding: ${rem(20)};
  `};
`;

export const ColumnContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
