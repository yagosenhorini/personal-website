import styled from 'styled-components';
import { rem } from 'polished';

export const SecondSectionWrapper = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    width: 100%;
    padding: ${rem(20)};
    max-width: ${rem(363)};
    margin: ${rem(60)} auto 0;
    justify-content: space-between;
  `}
`;

export const ColumnContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: ${rem(14)};
  margin-top: ${rem(20)};
  line-height: ${rem(24)};
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.fontPrimary};
`;

export const EmailSection = styled.div`
  width: 100%;
  display: flex;
`;

export const EmailButton = styled.a`
  display: flex;
  cursor: pointer;
  transition: 0.45s;
  width: ${rem(152)};
  height: ${rem(62)};
  align-items: center;
  font-size: ${rem(16)};
  text-decoration: none;
  margin-top: ${rem(28)};
  justify-content: center;
  border-radius: ${rem(5)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};

  /** */
  &:hover {
    scale: 1.125;
  }
`;
