// font weights
export const fontWeights = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

[
  fontWeights.hairline,
  '',
  fontWeights.light,
  fontWeights.regular,
  '',
  '',
  fontWeights.bold,
  '',
  fontWeights.black
] = fontWeights;

fontWeights.body = fontWeights.regular;
fontWeights.heading = fontWeights.bold;
fontweights.display = fontWeights.black;

export default fontWeights;