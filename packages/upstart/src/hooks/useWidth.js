import { useTheme } from './useTheme';
import { usePreferredUnit } from './usePreferredUnit';

export const useWidth = (width) => {
  const { widths } = useTheme();
  return usePreferredUnit(widths[width]);
};

export default useWidth;
