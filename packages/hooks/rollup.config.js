import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import glob from 'glob';

const hooks = [...glob.sync('src/**/*.js')].filter(
  (file) => !file.includes('index') && !file.includes('__tests__') && !file.includes('test-utils'),
).reduce(
  (acc, file) => {
    acc[file.replace('src/', '').replace(/([\w]+)\/([\w]+).js/, '$2')] = file;
    return acc;
  }, { index: 'src/index.js' },
);

const config = {
  input: hooks,
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
