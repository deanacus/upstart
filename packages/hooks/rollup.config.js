const glob = require('glob');

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
  external: [
    'react',
    'react-dom',
    'prop-types',
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ],
})


const config = ['index.js', ...glob.sync('src/**/*.js')].map( file => template(file));

export default config;