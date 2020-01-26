import { useTheme } from '../useTheme/useTheme';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useBorderWidth = (width) => {
  const { borderWidths } = useTheme();
  return usePreferredUnit(borderWidths[width]);
};

export default useBorderWidth;
