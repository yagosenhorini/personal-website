import { rem } from 'polished';
import styled from 'styled-components';

import { Title } from '@Components/Title/styled';

export const AboutSectionWrapper = styled.section`
  width: 80%;
  border-radius: ${rem(20)};
  margin: ${rem(50)} auto ${rem(10)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    padding: ${rem(48)} ${rem(26)};
  `};

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    width: 60%;
    padding: ${rem(40)} ${rem(28)};
  `};
`;

export const AboutSectionTitle = styled(Title)`
  margin: 0;
  font-weight: 500;
  font-size: ${rem(16)};
`;

export const AboutSectionDescription = styled.article`
  font-size: ${rem(14)};
  margin-top: ${rem(20)};
  line-height: ${rem(20)};
  color: ${({ theme }) => theme.colors.descriptionGray};
`;
