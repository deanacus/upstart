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

const shadows = [];

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
  space,
  variants: {
    ...fontStyles,
  },
};

export default Theme;
