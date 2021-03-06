module.exports = {
  reportUnusedDisableDirectives: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['simple-import-sort'],
  parserOptions: { sourceType: 'module' },
  env: { es2022: true },
  rules: {
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'smart'],
    'func-names': ['warn', 'as-needed'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-shadow': 'warn',
    'no-throw-literal': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    'operator-assignment': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    radix: 'warn',
    'spaced-comment': ['warn', 'always', { block: { balanced: true } }],
    strict: ['warn', 'never'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
