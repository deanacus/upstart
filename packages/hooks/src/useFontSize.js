import { useTheme } from './useTheme';
import { usePreferredUnit } from './usePreferredUnit';

export const useFontSize = (size) => {
  const { fontSizes } = useTheme();
  return `font-size: ${usePreferredUnit(fontSizes[size])}`;
};

export default useFontSize;
