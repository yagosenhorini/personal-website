import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const SecondSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: ${rem(20)};
  max-width: ${rem(363)};
  justify-content: space-between;
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
  font-family: ${({ theme }) => theme.fontPrimary};
`;

export const EmailSection = styled.div`
  width: 100%;
  display: flex;
`;

export const EmailButton = styled(Button)`
  display: flex;
  cursor: pointer;
  transition: 0.45s;
  width: ${rem(152)};
  height: ${rem(62)};
  align-items: center;
  font-size: ${rem(16)};
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
