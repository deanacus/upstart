import { useTheme } from './useTheme';
import { usePreferredUnit } from './usePreferredUnit';

export const useMediaQuery = (size, content) => {
  const { breakpoints } = useTheme();
  return `@media (min-width: ${usePreferredUnit(breakpoints[size])}) {
    ${content}
  }`;
};

export default useMediaQuery;
