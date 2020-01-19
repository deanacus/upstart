export const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'inherit',
  monospace: 'Menlo, monospace',
};

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];

[
  fontSizes.xs,
  fontSizes.sm,
  fontSizes.base,
  fontSizes.md,
  fontSizes.lg,
  fontSizes.xl,
  fontSizes.xxl,
  fontSizes.title,
  fontSizes.display,
] = fontSizes;

export const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

[
  fontWeights.thin,
  fontWeights.extralight,
  fontWeights.light,
  fontWeights.regular,
  fontWeights.medium,
  fontWeights.semibold,
  fontWeights.bold,
  fontWeights.extrabold,
  fontWeights.black,
] = fontWeights;

fontWeights.body = fontWeights.regular;
fontWeights.heading = fontWeights.bold;
fontWeights.display = fontWeights.black;

export default fontWeights;
