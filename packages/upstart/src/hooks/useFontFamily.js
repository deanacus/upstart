import { useTheme } from './useTheme';

export const useFontFamily = (family) => {
  const { fonts } = useTheme();
  return `font-family: ${fonts[family]}`;
};

export default useFontFamily;
