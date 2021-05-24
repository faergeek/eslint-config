module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
