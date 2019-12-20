const fs = require('fs')

const path = `${process.cwd()}/src/components/`

const template = (fileName) => ({
  input: `src/components/${fileName}/${fileName}.js`,
  output: {
    exports: 'named',
    file: `dist/${fileName}.js`,
    format: 'cjs',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
})
const config = fs.readdirSync(path, { encoding: 'utf8', withFileTypes: true})
.filter(file => file.isDirectory())
.map( file => template(file));

  console.log({...config})