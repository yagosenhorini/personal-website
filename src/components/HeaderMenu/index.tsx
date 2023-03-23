import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';

import MenuMobile from '@Components/MenuMobile';
import Logo from '@Images/logo-teste.png';
import { headerMenu } from '@Resources/header-menu';

import * as S from './styled';

const DynamicMobile = dynamic(() => import('@Components/Responsive/Mobile'), {
  ssr: false,
});

const DynamicIsNotMobile = dynamic(
  () => import('@Components/Responsive/NotMobile'),
  {
    ssr: false,
  }
);

const HeaderMenu = () => {
  const [isShowMenu, setIsShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <>
      <DynamicIsNotMobile>
        <S.Menu>
          <S.LogoWrapper>
            <Image width={40} height={40} src={Logo} alt="Logo" title="Logo" />
          </S.LogoWrapper>
          <S.HeaderMenuWrapper>
            {headerMenu.map(({ route, title, main }) => (
              <Link key={route} href={route}>
                <S.HeaderMenuItem
                  id={route}
                  className={cx({ 'is--home': main })}
                >
                  {title}
                </S.HeaderMenuItem>
              </Link>
            ))}
          </S.HeaderMenuWrapper>
        </S.Menu>
      </DynamicIsNotMobile>
      <DynamicMobile>
        <S.LogoWrapper
          data-testid="logo-button"
          className="is--mobile"
          onClick={toggleMenu}
        >
          <Image
            width={40}
            height={40}
            src={Logo}
            alt="Logo"
            title="Logo"
            loading="lazy"
          />
        </S.LogoWrapper>
        <MenuMobile
          testId="mobile-menu"
          isActive={isShowMenu}
          setIsActive={toggleMenu}
        >
          {headerMenu.map(({ route, title, main }) => (
            <Link href={route} key={route}>
              <S.HeaderMenuItem
                onClick={toggleMenu}
                id={route}
                className={cx({ 'is--home': main })}
              >
                {title}
              </S.HeaderMenuItem>
            </Link>
          ))}
        </MenuMobile>
      </DynamicMobile>
    </>
  );
};

export default HeaderMenu;
