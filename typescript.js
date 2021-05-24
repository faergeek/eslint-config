module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
