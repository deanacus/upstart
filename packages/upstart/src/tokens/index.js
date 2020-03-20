import { space } from '@deanacus/upstart-tokens/dist/space';
import { fonts } from '@deanacus/upstart-tokens/dist/font-family';
import { fontSize } from '@deanacus/upstart-tokens/dist/font-size';
import { fontWeight } from '@deanacus/upstart-tokens/dist/font-weight';
import { width } from '@deanacus/upstart-tokens/dist/width';
import { breakpoints as breakpoint } from '@deanacus/upstart-tokens/dist/breakpoints';
import { borderWidth } from '@deanacus/upstart-tokens/dist/border-width';
import { borderRadius } from '@deanacus/upstart-tokens/dist/border-radius';
import { shadow } from '@deanacus/upstart-tokens/dist/shadows';
import { zIndex } from '@deanacus/upstart-tokens/dist/zindex';
import { lineHeight } from '@deanacus/upstart-tokens/dist/line-height';
import { blue } from '@deanacus/upstart-tokens/dist/color-blue';
import { green } from '@deanacus/upstart-tokens/dist/color-green';
import { grey } from '@deanacus/upstart-tokens/dist/color-grey';
import { orange } from '@deanacus/upstart-tokens/dist/color-orange';
import { red } from '@deanacus/upstart-tokens/dist/color-red';
import { yellow } from '@deanacus/upstart-tokens/dist/color-yellow';

import { rootVal, preferredUnit } from './root';

export const borders = [
  `${borderWidth.xs}px solid ${grey['300']}`,
  `${borderWidth.xs}px solid ${blue['300']}`,
  `${borderWidth.xs}px solid ${orange['300']}`,
  `${borderWidth.xs}px solid ${green['300']}`,
  `${borderWidth.xs}px solid ${yellow['300']}`,
  `${borderWidth.xs}px solid ${red['300']}`,
];

const defaultTheme = {
  rootVal,
  preferredUnit,
  space,
  fonts,
  fontSize,
  fontWeight,
  lineHeight,
  width,
  breakpoint,
  borderWidth,
  borderRadius,
  borders,
  shadow,
  zIndex,
  colors: {
    foreground: grey['800'],
    background: grey['50'],
    grey,
    blue,
    green,
    yellow,
    orange,
    red,
  },
};

export default defaultTheme;
