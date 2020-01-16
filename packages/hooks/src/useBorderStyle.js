import { useTheme } from './useTheme';

export const useBorderStyle = (style) => {
  const { borderStyles } = useTheme();
  return borderStyles[style];
};

export default useBorderStyle;
