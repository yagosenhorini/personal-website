import React from 'react';
import useResponsive from '@Hooks/useResponsive';

const NotMobile = ({ children }) => {
  const { isNotMobile } = useResponsive();
  return isNotMobile ? (children as React.ReactElement) : null;
};

if (process.env.NODE_ENV !== 'production') {
  NotMobile.displayName = 'NotMobile';
}

export default React.memo(NotMobile);
