import { rem } from 'polished';
import styled from 'styled-components';

import { Title } from '@Components/Title/styled';
import { mq } from '@Settings/index';

export const AboutSectionWrapper = styled.section`
  width: 85%;
  margin: ${rem(80)} auto 0;
  border-radius: ${rem(20)};
  padding: ${rem(96)} ${rem(26)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};

  /** */
  ${mq.greaterThan('sm')`
    width: 95%;
    padding-left: ${rem(28)};
    padding-right: ${rem(28)};
  `};
`;

export const AboutSectionTitle = styled(Title)`
  margin: 0;
  font-size: ${rem(16)};
`;

export const AboutSectionDescription = styled.article`
  font-size: ${rem(14)};
  margin-top: ${rem(20)};
  line-height: ${rem(20)};
  color: ${({ theme }) => theme.colors.descriptionGray};
`;
