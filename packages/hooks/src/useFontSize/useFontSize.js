import { useTheme } from '../useTheme/useTheme';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useFontSize = (size) => {
  const { fontSizes } = useTheme();
  return `font-size: ${usePreferredUnit(fontSizes[size])}`;
};

export default useFontSize;
