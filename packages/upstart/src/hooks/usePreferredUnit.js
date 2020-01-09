import { useTheme } from './useTheme';

export const usePreferredUnit = (value) => {
  const { rootVal, preferredUnit } = useTheme();

  if (preferredUnit !== 'rem') {
    return `${value}px`;
  }

  return `${(value / rootVal)}rem`;
};

export default usePreferredUnit;
