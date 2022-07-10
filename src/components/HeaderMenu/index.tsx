import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@Images/logo-teste.png';

import { headerMenu } from '@Resources/header-menu';

import * as S from './styled';

const HeaderMenu = () => (
  <S.Menu>
    <S.LogoWrapper>
      <Image
        layout="responsive"
        width="40px"
        height="40px"
        src={Logo}
        alt="Logo"
        title="Logo"
      />
    </S.LogoWrapper>
    <S.HeaderMenuWrapper>
      {headerMenu.map(({ id, route, title, main }) => (
        <Link key={id} href={route}>
          <S.HeaderMenuItem id={route} className={cx({ 'is--home': main })}>
            {title}
          </S.HeaderMenuItem>
        </Link>
      ))}
    </S.HeaderMenuWrapper>
  </S.Menu>
);

export default HeaderMenu;
