import { useTheme } from './useTheme';

export const useFontWeight = (weight) => {
  const { fontWeights } = useTheme();
  return `font-weight: ${fontWeights[weight]}`;
};

export default useFontWeight;
