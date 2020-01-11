import { useTheme } from './useTheme';
import { usePreferredUnit } from './usePreferredUnit';

export const useBorderWidth = (width) => {
  const { borderWidths } = useTheme();
  return usePreferredUnit(borderWidths[width]);
};

export default useBorderWidth;
