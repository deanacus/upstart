const rootVal = 10;

const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
];

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'inherit',
  monospace: 'Menlo, monospace'
};

const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  96,
];

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
};

const lineHeights = {
  body: 1.6,
  heading: 1.125
};

const colors = {
  "white": "#ffffff",
  "black": "#000000",
  "primary":  {
    "50": "#e3fafc",
    "100": "#c5f6fa",
    "200": "#99e9f2",
    "300": "#66d9e8",
    "400": "#3bc9db",
    "500": "#22b8cf",
    "600": "#15aabf",
    "700": "#1098ad",
    "800": "#0c8599",
    "900": "#0b7285"
  },
  "secondary": {
    "50": "#fff4e6",
    "100": "#ffe8cc",
    "200": "#ffd8a8",
    "300": "#ffc078",
    "400": "#ffa94d",
    "500": "#ff922b",
    "600": "#fd7e14",
    "700": "#f76707",
    "800": "#e8590c",
    "900": "#d9480f"
  },
  "danger": "#ff6b6b",
  "success": "#51cf66",
  "warn": "#fcc419",
  "info": "#5c7cfa",
  "grey": {
    "50": "#f8f9fa",
    "100": "#f1f3f5",
    "200": "#e9ecef",
    "300": "#dee2e6",
    "400": "#ced4da",
    "500": "#adb5bd",
    "600": "#868e96",
    "700": "#495057",
    "800": "#343a40",
    "900": "#212529"
  },
  "red": {
    "50": "#fff5f5",
    "100": "#ffe3e3",
    "200": "#ffc9c9",
    "300": "#ffa8a8",
    "400": "#ff8787",
    "500": "#ff6b6b",
    "600": "#fa5252",
    "700": "#f03e3e",
    "800": "#e03131",
    "900": "#c92a2a"
  },
  "indigo": {
    "50": "#edf2ff",
    "100": "#dbe4ff",
    "200": "#bac8ff",
    "300": "#91a7ff",
    "400": "#748ffc",
    "500": "#5c7cfa",
    "600": "#4c6ef5",
    "700": "#4263eb",
    "800": "#3b5bdb",
    "900": "#364fc7"
  },
  "blue": {
    "50": "#e7f5ff",
    "100": "#d0ebff",
    "200": "#a5d8ff",
    "300": "#74c0fc",
    "400": "#4dabf7",
    "500": "#339af0",
    "600": "#228be6",
    "700": "#1c7ed6",
    "800": "#1971c2",
    "900": "#1864ab"
  },
  "cyan": {
    "50": "#e3fafc",
    "100": "#c5f6fa",
    "200": "#99e9f2",
    "300": "#66d9e8",
    "400": "#3bc9db",
    "500": "#22b8cf",
    "600": "#15aabf",
    "700": "#1098ad",
    "800": "#0c8599",
    "900": "#0b7285"
  },
  "teal": {
    "50": "#e6fcf5",
    "100": "#c3fae8",
    "200": "#96f2d7",
    "300": "#63e6be",
    "400": "#38d9a9",
    "500": "#20c997",
    "600": "#12b886",
    "700": "#0ca678",
    "800": "#099268",
    "900": "#087f5b"
  },
  "green": {
    "50": "#ebfbee",
    "100": "#d3f9d8",
    "200": "#b2f2bb",
    "300": "#8ce99a",
    "400": "#69db7c",
    "500": "#51cf66",
    "600": "#40c057",
    "700": "#37b24d",
    "800": "#2f9e44",
    "900": "#2b8a3e"
  },
  "yellow": {
    "50": "#fff9db",
    "100": "#fff3bf",
    "200": "#ffec99",
    "300": "#ffe066",
    "400": "#ffd43b",
    "500": "#fcc419",
    "600": "#fab005",
    "700": "#f59f00",
    "800": "#f08c00",
    "900": "#e67700"
  },
  "orange": {
    "50": "#fff4e6",
    "100": "#ffe8cc",
    "200": "#ffd8a8",
    "300": "#ffc078",
    "400": "#ffa94d",
    "500": "#ff922b",
    "600": "#fd7e14",
    "700": "#f76707",
    "800": "#e8590c",
    "900": "#d9480f"
  }
}


const radii = [
  3,
  5,
  7,
]

const breakpoints = [
  320,
  480,
  768,
  992,
  1200,
  1680,
];

const widths = [
  320,
  480,
  768,
  1024,
  1200,
  1440,
  1680,
];

const mediaQueries = (size, content) => `@media (min-width: ${breakpoints[size]}) {
  ${content}
}`

const getSpacing = (shorthand) => {
  const [key, index] = shorthand.split('-');
  const propID = key.charAt(0)
  const prop = propID === 'm' ? 'margin' : 'padding';

  if ( index > 4 ) {
    console.warn(`Requesting ${key} will result in a very large amount of padding`);
  }

  switch (key) {
    case `${propID}`:
      return `${prop}: ${space[index] / rootVal}rem;`;
    case `${propID}x`:
      return `
        ${prop}-right: ${space[index] / rootVal}rem;
        ${prop}-left: ${space[index] / rootVal}rem;
      `;
    case `${propID}y`:
      return `
        ${prop}-top: ${space[index] / rootVal}rem;
        ${prop}-bottom: ${space[index] / rootVal}rem;
      `;
    case `${propID}t`:
      return `${prop}-top: ${space[index] / rootVal}rem;`;
    case `${propID}r`:
      return `${prop}-right: ${space[index] / rootVal}rem;`;
    case `${propID}b`:
      return `${prop}-bottom: ${space[index] / rootVal}rem;`;
    case `${propID}l`:
      return `${prop}-left: ${space[index] / rootVal}rem;`;
    default:
      return null;
  }
}

export const theme = {
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  breakpoints,
  radii,
  widths,
  utils: {
    getSpacing,
    mediaQueries,
  }
}

export default theme