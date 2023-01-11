import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import pkg from './package.json';

export default {
  input:'src/index.js',
  output: [
    { file: pkg.main, format: 'esm', exports: 'named', }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    alias({ 
      resolve: ['*', '.js', '.jsx'],
        entries: [
          {
            find: '@',
            replacement: path.resolve("src")
          },
        ],
     }),
    resolve({ extensions: ['.js', '.jsx'], browser: true }),
    peerDepsExternal({includeDependencies: true}),
    terser(),
  ],
};