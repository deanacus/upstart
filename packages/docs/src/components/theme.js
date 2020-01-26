import plexSansLight from '../../static/fonts/IBMPlexSans-Light.woff2';
import plexSansRegular from '../../static/fonts/IBMPlexSans-Regular.woff2';
import plexSansItalic from '../../static/fonts/IBMPlexSans-Italic.woff2';
import plexSansBold from '../../static/fonts/IBMPlexSans-Bold.woff2';
import poppinsBlack from '../../static/fonts/Poppins-Bold.ttf';

const plexSans = [
  plexSansLight,
  plexSansRegular,
  plexSansItalic,
  plexSansBold,
];

[
  plexSans.light,
  plexSans.regular,
  plexSans.italic,
  plexSans.bold,
] = plexSans;

const poppins = [
  poppinsBlack,
];

[
  poppins.black,
] = poppins;

export const typeFaces = {
  plexSans,
  poppins,
};

export default typeFaces;
