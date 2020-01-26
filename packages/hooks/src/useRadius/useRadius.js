// import { useTheme } from '../useTheme/useTheme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useRadius = (rad) => {
  const { radii } = useContext(ThemeContext);
  return usePreferredUnit(radii[rad]);
};

export default useRadius;
