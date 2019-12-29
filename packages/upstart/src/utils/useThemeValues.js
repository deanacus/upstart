import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const usePreferredUnit = (value) => {
  const { rootVal, preferredUnit } = useContext(ThemeContext);

  if ( preferredUnit !== 'rem' ) {
    return `${value}px`;
  }

  return `${(value / rootVal)}rem`;
}

export const useSpace = (alias) => {
  const { rootVal, space } = useContext(ThemeContext);
  const [key, index] = alias.split('-');
  const propID = key.charAt(0)
  const prop = propID === 'm' ? 'margin' : 'padding';

  switch (key) {
    case `${propID}`:
      return `${prop}: ${space[index] / rootVal}rem;`;
    case `${propID}x`:
      return `
        ${prop}-right: ${space[index] / rootVal}rem;
        ${prop}-left: ${space[index] / rootVal}rem;
      `;
    case `${propID}y`:
      return `
        ${prop}-top: ${space[index] / rootVal}rem;
        ${prop}-bottom: ${space[index] / rootVal}rem;
      `;
    case `${propID}t`:
      return `${prop}-top: ${space[index] / rootVal}rem;`;
    case `${propID}r`:
      return `${prop}-right: ${space[index] / rootVal}rem;`;
    case `${propID}b`:
      return `${prop}-bottom: ${space[index] / rootVal}rem;`;
    case `${propID}l`:
      return `${prop}-left: ${space[index] / rootVal}rem;`;
    default:
      return null;
  }
}

export const usePadding = (alias) => useSpace(alias);

export const useMargin = (alias) => useSpace(alias);

export const useFontFamily = (family) => {
  const { fonts } = useContext(ThemeContext);
  return `font-family: ${fonts[family]}`
}

export const useFontSize = (size) => {
  const { fontSizes } = useContext(ThemeContext);
  return `font-size: ${getUnit(fontSizes[size])}`
}

export const useFontWeight = (weight) => {
  const { fontWeights } = useContext(ThemeContext);
  return `font-weight: ${fontWeights[weight]}`
}

