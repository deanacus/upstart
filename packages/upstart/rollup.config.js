import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = {
  input: `src/components/index.js`,
  output: {
    exports: 'named',
    file: `dist/index.js`,
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
}

export default config;
