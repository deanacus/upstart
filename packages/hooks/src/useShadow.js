import { useTheme } from './useTheme';

export const useShadow = (type) => {
  const { shadows } = useTheme();
  return shadows[type];
};

export default useShadow;
