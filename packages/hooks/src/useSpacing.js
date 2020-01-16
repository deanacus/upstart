import { useTheme } from './useTheme';

export const useSpacing = (alias) => {
  const { rootVal, space } = useTheme();
  const [key, index] = alias.split('-');
  const propID = key.charAt(0);
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
};

export const usePadding = (alias) => useSpacing(alias);

export const useMargin = (alias) => useSpacing(alias);

export default useSpacing;
