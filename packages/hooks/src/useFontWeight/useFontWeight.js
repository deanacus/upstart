import { useTheme } from '../useTheme/useTheme';

export const useFontWeight = (weight) => {
  const { fontWeights } = useTheme();
  return `font-weight: ${fontWeights[weight]}`;
};

export default useFontWeight;
