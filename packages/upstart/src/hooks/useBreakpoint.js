import {useState, useEffect} from 'react';

function throttle( callback ) {
	let timeout;
	if (timeout) {
		cancelAnimationFrame(timeout);
	}
	timeout = requestAnimationFrame(function () {
    callback(this.args)
	});
}


export const useBreakpoint = ({breakpoints}) => {
  const getBreakpoint = (width) => {
    if ( window.innerWidth > breakpoints.xxl) {
      return 'xxxl'
    }
    if ( window.innerWidth > breakpoints.xl) {
      return 'xxl'
    }
    if ( window.innerWidth > breakpoints.lg) {
      return 'xl'
    }
    if ( window.innerWidth > breakpoints.md) {
      return 'lg'
    }
    if ( window.innerWidth > breakpoints.sm) {
      return 'md'
    }
    if ( window.innerWidth > breakpoints.xs) {
      return 'sm'
    }
    if ( window.innerWidth > breakpoints.xxs) {
      return 'xs'
    }

    return 'xxs'
  };

  const [ breakpoint, setBreakpoint ] = useState(getBreakpoint(window.innerWidth));

  const handleResize = () => {
    setBreakpoint(getBreakpoint(window.innerWidth))
  }

  const throttledHander = throttle(handleResize);

  useEffect(() => {
    window.addEventListener('resize', throttledHander);
    return () => window.removeEventListener('resize', throttledHander);
  });

  return { breakpoint };
};

export default useBreakpoint;