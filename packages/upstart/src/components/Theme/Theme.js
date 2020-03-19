import { space } from '@deanacus/upstart-tokens/dist/space';
import { fonts } from '@deanacus/upstart-tokens/dist/font-family';
import { fontSizes } from '@deanacus/upstart-tokens/dist/font-size';
import { fontWeights } from '@deanacus/upstart-tokens/dist/font-weight';
import { width as widths } from '@deanacus/upstart-tokens/dist/width';
import { breakpoints } from '@deanacus/upstart-tokens/dist/breakpoints';
import { borderWidth as borderWidths } from '@deanacus/upstart-tokens/dist/border-width';
import { borderRadius as radii } from '@deanacus/upstart-tokens/dist/border-radius';
import { shadow } from '@deanacus/upstart-tokens/dist/shadows';
import { zIndex } from '@deanacus/upstart-tokens/dist/zindex';
// import { lineHeight as lineHeights } from '@deanacus/upstart-tokens/dist/line-height';
import { rootVal, preferredUnit } from '../../tokens/root';
import { colors } from '../../tokens/colors';

import {
  borders, borderStyles,
} from '../../tokens/borders';

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

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
  zIndex,
  shadow,
  space,
  variants: {
    ...fontStyles,
  },
};

export default Theme;
