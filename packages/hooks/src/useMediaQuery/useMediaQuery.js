import { useTheme } from '../useTheme/useTheme';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useMediaQuery = (size, content) => {
  const { breakpoints } = useTheme();
  return `@media (min-width: ${usePreferredUnit(breakpoints[size])}) {
    ${content}
  }`;
};

export default useMediaQuery;
