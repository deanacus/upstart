import { useTheme } from '../useTheme/useTheme';

export const useBorder = (border) => {
  const { borders } = useTheme();
  return borders[border];
};

export default useBorder;
