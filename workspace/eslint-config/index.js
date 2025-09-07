import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default defineConfig({
  extends: [js.configs.recommended],
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'smart'],
    'func-names': ['warn', 'as-needed'],
    'func-style': ['warn', 'declaration'],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-shadow': 'warn',
    'no-throw-literal': 'warn',
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    'operator-assignment': 'warn',
    'prefer-const': ['warn', { destructuring: 'all' }],
    'prefer-template': 'warn',
    radix: 'warn',
    'spaced-comment': [
      'warn',
      'always',
      { block: { balanced: true }, markers: ['/'] },
    ],
    strict: ['warn', 'never'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
});
