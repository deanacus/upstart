import { useTheme } from './useTheme';

export const usePreferredUnit = (value) => {
  const { rootVal, preferredUnit } = useTheme();

  if (preferredUnit !== 'rem') {
    return `${value}px`;
  }

  return `${(value / rootVal)}rem`;
};

export const useSpace = (alias) => {
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

export const usePadding = (alias) => useSpace(alias);

export const useMargin = (alias) => useSpace(alias);

export const useFontFamily = (family) => {
  const { fonts } = useTheme();
  return `font-family: ${fonts[family]}`;
};

export const useFontSize = (size) => {
  const { fontSizes } = useTheme();
  return `font-size: ${usePreferredUnit(fontSizes[size])}`;
};

export const useFontWeight = (weight) => {
  const { fontWeights } = useTheme();
  return `font-weight: ${fontWeights[weight]}`;
};

export const useLineHeight = (height) => {
  const { lineHeights } = useTheme();
  return `line-height: ${lineHeights[height]}`;
};

export const useWidth = (width) => {
  const { widths } = useTheme();
  return usePreferredUnit(widths[width]);
};

export const useBreakpoint = (bp) => {
  const { breakpoints } = useTheme();
  return usePreferredUnit(breakpoints[bp]);
};

export const useBorder = (border) => {
  const { borders } = useTheme();
  return borders[border];
};

export const useBorderWidth = (width) => {
  const { borderWidths } = useTheme();
  return usePreferredUnit(borderWidths[width]);
};

export const useBorderStyle = (style) => {
  const { borderStyles } = useTheme();
  return borderStyles[style];
};

export const useMediaQuery = (size, content) => {
  const { breakpoints } = useTheme();
  return `@media (min-width: ${usePreferredUnit(breakpoints[size])}) {
    ${content}
  }`;
};

export const useRadius = (rad) => {
  const { radii } = useTheme();
  return usePreferredUnit(radii[rad]);
};

export const useElevation = (layer) => {
  const { zIndices } = useTheme();
  return zIndices[layer];
};

export const useShadow = (type) => {
  const { shadows } = useTheme();
  return shadows[type];
};
