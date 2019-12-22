import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const glob = require('glob');

const components = [...glob.sync('src/components/**/*.js')]
  .filter(file => !file.includes('index') && !file.includes('styled'))
  .reduce( (acc, file) => {
    acc[file.replace('src/components/', '').replace(/([\w]+)\/([\w]+).js/, '$2')] = file;
    return acc;
  }, {index: 'src/components/index.js'})

console.log(components);

const config = {
  input: components,
  output: {
    exports: 'named',
    dir: 'dist',
    format: 'cjs',
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
}

export default config;
