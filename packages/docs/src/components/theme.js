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

export const fonts = {
  body: '"Plex Sans", Helvetica, Arial, system-ui, sans-serif',
  heading: '"Poppins", Helvetica, Arial, system-ui, sans-serif',
  monospace: 'Menlo, monospace',
};

export const ayu = {
  light: {
    common: {
      accent: '#FF9940',
      bg: '#FAFAFA',
      fg: '#6C7680',
      ui: '#959DA6',
    },
    syntax: {
      tag: '#55B4D4',
      func: '#F2AE49',
      entity: '#399EE6',
      string: '#86B300',
      regexp: '#4CBF99',
      markup: '#F07171',
      keyword: '#FA8D3E',
      special: '#E6BA7E',
      comment: '#ABB0B6',
      constant: '#A37ACC',
      operator: '#ED9366',
      error: '#F51818',
    },
    ui: {
      line: '#959DA61A',
      panel: {
        bg: '#FFFFFF',
        shadow: '#56606940',
        border: '#F0F0F0',
      },
      gutter: {
        normal: '#959DA666',
        active: '#959DA6CC',
      },
      selection: {
        bg: '#EDF0F5',
        inactive: '#F2F4F7',
        border: '#E5EBF2',
      },
      guide: {
        active: '#959DA6B3',
        normal: '#959DA64D',
      },
    },
    vcs: {
      added: '#99BF4D',
      modified: '#709ECC',
      removed: '#F27983',
    },
  },
  mirage: {
    common: {
      accent: '#FFCC66',
      bg: '#1F2430',
      fg: '#CBCCC6',
      ui: '#707A8C',
    },
    syntax: {
      tag: '#5CCFE6',
      func: '#FFD580',
      entity: '#73D0FF',
      string: '#BAE67E',
      regexp: '#95E6CB',
      markup: '#F28779',
      keyword: '#FFA759',
      special: '#FFE6B3',
      comment: '#5C6773',
      constant: '#D4BFFF',
      operator: '#F29E74',
      error: '#FF3333',
    },
    ui: {
      line: '#191E2A',
      panel: {
        bg: '#232834',
        shadow: '#141925',
        border: '#101521',
      },
      gutter: {
        normal: '#707A8C66',
        active: '#707A8CCC',
      },
      selection: {
        bg: '#34455A',
        inactive: '#2D3B4D',
        border: '#3C526A',
      },
      guide: {
        active: '#707A8CB3',
        normal: '#707A8C4D',
      },
    },
    vsc: {
      added: '#A6CC70',
      modified: '#77A8D9',
      removed: '#F27983',
    },
  },
  dark: {
    common: {
      accent: '#E6B450',
      bg: '#0A0E14',
      fg: '#B3B1AD',
      ui: '#3D424D',
    },
    syntax: {
      tag: '#39BAE6',
      func: '#FFB454',
      entity: '#59C2FF',
      string: '#C2D94C',
      regexp: '#95E6CB',
      markup: '#F07178',
      keyword: '#FF8F40',
      special: '#E6B673',
      comment: '#626A73',
      constant: '#FFEE99',
      operator: '#F29668',
      error: '#FF3333',
    },
    ui: {
      line: '#01060E',
      panel: {
        bg: '#0D1016',
        shadow: '#00010A',
        border: '#000000',
      },
      gutter: {
        normal: '#3D424D99',
        active: '#3D424DE6',
      },
      selection: {
        bg: '#273747',
        inactive: '#1F2C39',
        border: '#304357',
      },
      guide: {
        active: '#3D424DB3',
        normal: '#3D424D66',
      },
    },
    vcs: {
      added: '#91B362',
      modified: '#6994BF',
      removed: '#D96C75',
    },
  },
};

export const customTheme = {
  typeFaces,
  fonts,
  ayu,
};

export default customTheme;
