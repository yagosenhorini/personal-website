import React from 'react';

import Subtitle from '@Components/Subtitle';

import EmailIcon from '@Icons/email.svg';

import * as S from './styled';

const SecondSection = () => (
  <S.SecondSectionWrapper>
    <S.ColumnContent>
      <Subtitle content="Sou desenvolvedor Front-End residente na cidade de São Paulo/SP" />
      <S.Description>
        Atuo com desenvolvimento front-end há mais de quatro anos. Durante minha
        carreira, passei por consultoria de marketing digital e startups.
      </S.Description>
      <S.EmailSection>
        <S.EmailButton type="button">
          <EmailIcon width={16} height={16} style={{ marginRight: '10px' }} />
          Email
        </S.EmailButton>
      </S.EmailSection>
    </S.ColumnContent>
  </S.SecondSectionWrapper>
);

export default SecondSection;