import { useTheme } from './useTheme';

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
