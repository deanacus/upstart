import { useTheme } from '../useTheme/useTheme';

export const useShadow = (type) => {
  const { shadows } = useTheme();
  return shadows[type];
};

export default useShadow;
