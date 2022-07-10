import styled from 'styled-components';

import { rem } from 'polished';

export const FirstSectionWrapper = styled.section`
  width: 95%;
  display: flex;
  margin: 0 auto;
  padding: ${rem(20)};
  justify-content: space-between;
`;

export const ColumnContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
