import { useTheme } from './useTheme';

export const useLineHeight = (height) => {
  const { lineHeights } = useTheme();
  return `line-height: ${lineHeights[height]}`;
};

export default useLineHeight;
