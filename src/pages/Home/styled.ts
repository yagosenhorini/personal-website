import styled from 'styled-components';

export const HomeWrapper = styled.main`
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    flex-direction: row;
  `}
`;
