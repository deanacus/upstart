import { space } from '@deanacus/upstart-tokens/dist/space';
import { fonts } from '@deanacus/upstart-tokens/dist/font-family';
import { fontSize } from '@deanacus/upstart-tokens/dist/font-size';
import { fontWeight } from '@deanacus/upstart-tokens/dist/font-weight';
import { width } from '@deanacus/upstart-tokens/dist/width';
import { breakpoints } from '@deanacus/upstart-tokens/dist/breakpoints';
import { borderWidth } from '@deanacus/upstart-tokens/dist/border-width';
import { borderRadius } from '@deanacus/upstart-tokens/dist/border-radius';
import { shadow } from '@deanacus/upstart-tokens/dist/shadows';
import { zIndex } from '@deanacus/upstart-tokens/dist/zindex';
// import { lineHeight as lineHeights } from '@deanacus/upstart-tokens/dist/line-height';
import { rootVal, preferredUnit } from '../../tokens/root';
import { colors } from '../../tokens/colors';

import {
  borders, borderStyles,
} from '../../tokens/borders';

import defaultTheme from '../../tokens';

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

const headingStyle = {
  fontFamily: fonts.heading,
  fontWeight: fontWeight.heading,
};

const fontStyles = {
  title: {
    fontSize: fontSize.title,
    ...headingStyle,
  },
  subtitle: {
    fontSize: fontSize.xxl,
    ...headingStyle,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    ...headingStyle,
  },
};

export const Theme = {
  ...defaultTheme,
};

export default Theme;
