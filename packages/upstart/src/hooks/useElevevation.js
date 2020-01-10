import { useTheme } from './useTheme';

export const useElevation = (layer) => {
  const { zIndices } = useTheme();
  return zIndices[layer];
};

export default useElevation;
