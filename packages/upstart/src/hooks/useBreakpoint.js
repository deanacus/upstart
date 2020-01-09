import { useState, useEffect } from 'react';

function throttle(callback) {
  let timeout;
  if (timeout) {
    cancelAnimationFrame(timeout);
  }
  timeout = requestAnimationFrame(() => callback(this.args));
}


export const useBreakpoint = ({ breakpoints }) => {
  const getBreakpoint = (width) => {
    if (width > breakpoints.xxl) {
      return 'xxxl';
    }
    if (width > breakpoints.xl) {
      return 'xxl';
    }
    if (width > breakpoints.lg) {
      return 'xl';
    }
    if (width > breakpoints.md) {
      return 'lg';
    }
    if (width > breakpoints.sm) {
      return 'md';
    }
    if (width > breakpoints.xs) {
      return 'sm';
    }
    if (width > breakpoints.xxs) {
      return 'xs';
    }

    return 'xxs';
  };

  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  const handleResize = () => {
    setBreakpoint(getBreakpoint(window.innerWidth));
  };

  const throttledHander = throttle(handleResize);

  useEffect(() => {
    window.addEventListener('resize', throttledHander);
    return () => window.removeEventListener('resize', throttledHander);
  });

  return { breakpoint };
};

export default useBreakpoint;
