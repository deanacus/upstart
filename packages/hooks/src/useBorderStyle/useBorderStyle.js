import { useTheme } from '../useTheme/useTheme';

export const useBorderStyle = (style) => {
  const { borderStyles } = useTheme();
  return borderStyles[style];
};

export default useBorderStyle;
