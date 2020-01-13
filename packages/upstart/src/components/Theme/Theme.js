import { rootVal, preferredUnit } from '../../tokens/root';
import { space } from '../../tokens/space';
import { fonts, fontSizes, fontWeights } from '../../tokens/type';
import { colors } from '../../tokens/colors';

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

const widths = [320, 480, 768, 1024, 1200, 1440, 1680];

widths.xxs = widths[0];
widths.xs = widths[1];
widths.sm = widths[2];
widths.md = widths[3];
widths.lg = widths[4];
widths.xl = widths[5];
widths.xxl = widths[6];

const breakpoints = [320, 480, 768, 992, 1200, 1680];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

const borders = {
  separator: `1px solid ${colors.grey[2]}`,
  thin: `1px solid ${colors.grey[2]}`,
}

const borderWidths = [1, 2, 3, 4, 8];

borderWidths.xs = borderWidths[0];
borderWidths.sm = borderWidths[1];
borderWidths.md = borderWidths[2];
borderWidths.lg = borderWidths[3];
borderWidths.xl = borderWidths[4];

const radii = [3, 5, 7];

radii.sm = radii[0];
radii.md = radii[1];
radii.lg = radii[2];
radii.pill = 20;
radii.circle = 50;

const zIndices = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const shadows = {};


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
  radii,
  zIndices,
  shadows,
  space,
  variants: {
    ...fontStyles,
  },
};

export default Theme;
