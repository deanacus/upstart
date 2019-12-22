import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const glob = require('glob');

const template = (fileName) => ({
  input: fileName,
  output: {
    exports: 'named',
    file: fileName.replace(/src\/components(\/\w+)*/gi, 'dist$1'),
    format: 'cjs',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  external: [
    'react',
    'react-dom',
    'styled-components'
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


const config = ['src/components/index.js', ...glob.sync('src/components/**/*.js')].map( file => template(file));

export default config;