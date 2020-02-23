// import { useTheme } from '../useTheme/useTheme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useColor = (color, strength = 5) => {
  const { colors } = useContext(ThemeContext);

  if (!colors[color]) {
    throw new Error('That color don\'t exist, yo');
  }

  if (typeof colors[color] === 'string') {
    return colors[color];
  }

  return colors[color][strength];
};

export default useColor;
