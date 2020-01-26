import { useTheme } from '../useTheme/useTheme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const usePreferredUnit = (value) => {
  const { rootVal, preferredUnit } = useContext(ThemeContext);

  if (preferredUnit !== 'rem') {
    return `${value}px`;
  }

  return `${(value / rootVal)}rem`;
};

export default usePreferredUnit;
