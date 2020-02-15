import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const glob = require('glob');

const components = [...glob.sync('src/components/**/*.js')]
  .filter((file) => !file.includes('index') && !file.includes('styled') && !file.includes('.test.js'))
  .reduce((acc, file) => {
    acc[file.replace('src/components/', '').replace(/([\w]+)\/([\w]+).js/, '$2')] = file;
    return acc;
  }, { index: 'src/components/index.js' });

const config = {
  input: components,
  output: [
    {
      exports: 'named',
      dir: 'dist',
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
};

export default config;
