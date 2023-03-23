import React from 'react';
import useResponsive from '@Hooks/useResponsive';

const Mobile = ({ children }) => {
  const { isMobile } = useResponsive();
  return isMobile ? (children as React.ReactElement) : null;
};

if (process.env.NODE_ENV !== 'production') {
  Mobile.displayName = 'Mobile';
}

export default React.memo(Mobile);
