import React from 'react';

import * as S from './styled';

type IMenu = {
  isActive: boolean;
  setIsActive: () => void;
  children: React.ReactNode;
  testId: string;
};

const MenuMobile = ({ isActive, setIsActive, children, testId }: IMenu) => (
  <S.MenuWrapper data-testid={testId} isActive={isActive}>
    <S.MenuList>
      <S.CloseButton type="button" onClick={setIsActive}>
        X
      </S.CloseButton>
      {children}
    </S.MenuList>
  </S.MenuWrapper>
);
export default MenuMobile;
