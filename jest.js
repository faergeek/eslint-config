module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/expect-expect': [
      'warn',
      { assertFunctionNames: ['expect', 'expectTypeOf'] },
    ],
    'jest/no-test-return-statement': 'warn',
    'jest/prefer-called-with': 'warn',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-todo': 'warn',
  },
};
