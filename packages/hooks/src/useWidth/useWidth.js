import { useTheme } from '../useTheme/useTheme';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useWidth = (width) => {
  const { widths } = useTheme();
  return usePreferredUnit(widths[width]);
};

export default useWidth;
