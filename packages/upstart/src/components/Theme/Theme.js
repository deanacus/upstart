import { rootVal, preferredUnit } from '../../tokens/root';
import { space } from '../../tokens/space';
import { fonts, fontSizes, fontWeights } from '../../tokens/type';
import { colors } from '../../tokens/colors';
import { widths, breakpoints } from '../../tokens/widths';
import {
  borders, borderWidths, radii, borderStyles,
} from '../../tokens/borders';

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

const zIndices = [
  -10,
  0,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
];

const shadows = [
  'none',
  '0px 1px 3px rgba(0, 0, 0, 0.1)',
  '0px 2px 4px rgba(0, 0, 0, 0.15)',
  '0px 2px 7px rgba(0, 0, 0, 0.15)',
  '0px 2px 10px rgba(0, 0, 0, 0.2)',
];

[
  shadows.none,
  shadows.sm,
  shadows.md,
  shadows.lg,
  shadows.xl,
] = shadows;

const elevations = shadows;

const headingStyle = {
  fontFamily: fonts.heading,
  fontWeight: fontWeights.heading,
};

const fontStyles = {
  title: {
    fontSize: fontSizes.title,
    ...headingStyle,
  },
  subtitle: {
    fontSize: fontSizes.xxl,
    ...headingStyle,
  },
  sectionTitle: {
    fontSize: fontSizes.xl,
    ...headingStyle,
  },
};

export const Theme = {
  preferredUnit,
  rootVal,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  widths,
  breakpoints,
  borders,
  borderWidths,
  borderStyles,
  radii,
  zIndices,
  shadows,
  elevations,
  space,
  variants: {
    ...fontStyles,
  },
};

export default Theme;
