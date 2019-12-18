const root = 10;
const values = [0, 4, 8, 12, 16, 20, 24, 40, 56, 72];
const space = [];
const padding = [];
const margin = [];

const sizeNames = [
  { alias: 'zero', index: '0' },
  { alias: 'xxsmall', index: '1' },
  { alias: 'xsmall', index: '2' },
  { alias: 'small', index: '3' },
  { alias: 'medium', index: '4' },
  { alias: 'large', index: '5' },
  { alias: 'xlarge', index: '6' },
  { alias: 'xxlarge', index: '7' },
  { alias: 'xxxlarge', index: '8' },
  { alias: 'huge', index: '9' },
];

const paddingAlias = [
  {
    alias: 'p',
    values: [
      'padding'
    ]
  },
  {
    alias: 'py',
    values: [
      'padding-top',
      'padding-bottom'
    ]
  },
  {
    alias: 'px',
    values: [
      'padding-right',
      'padding-left'
    ]
  },
  {
    alias: 'pt',
    values: [
      'padding-top'
    ]
  },
  {
    alias: 'pr',
    values: [
      'padding-bottom'
    ]
  },
  {
    alias: 'pb',
    values: [
      'padding-left'
    ]
  },
  {
    alias: 'pl',
    values: [
      'padding-right'
    ]
  },
];

const marginAlias = [
  {
    alias: 'm',
    values: [
      'margin'
    ]
  },
  {
    alias: 'my',
    values: [
      'margin-top',
      'margin-bottom'
    ]
  },
  {
    alias: 'mx',
    values: [
      'margin-right',
      'margin-left'
    ]
  },
  {
    alias: 'mt',
    values: [
      'margin-top'
    ]
  },
  {
    alias: 'mr',
    values: [
      'margin-bottom'
    ]
  },
  {
    alias: 'mb',
    values: [
      'margin-left'
    ]
  },
  {
    alias: 'ml',
    values: [
      'margin-right'
    ]
  },
];

let temp = sizeNames.map(({alias, index}) => space[alias] = `${values[index]/root}rem`)

temp = paddingAlias.map(({alias, values: aliasVals}) =>
  values.map((value, ind) => {
    padding[`${alias}-${ind}`] = aliasVals.map( val =>
      `${val}: ${value/root}rem;`
    ).join(' ')
  })
)
temp = marginAlias.map(({alias, values: aliasVals}) =>
  values.map((value, ind) => {
    margin[`${alias}-${ind}`] = aliasVals.map( val =>
      `${val}: ${value/root}rem;`
    ).join(' ')
  })
);

// export default {
//   space,
//   margin,
//   padding,
// }