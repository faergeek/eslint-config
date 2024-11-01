module.exports = {
  extends: 'plugin:@vitest/legacy-recommended',
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  rules: {
    '@vitest/consistent-test-it': [
      'warn',
      { fn: 'test', withinDescribe: 'it' },
    ],
    '@vitest/no-disabled-tests': 'warn',
    '@vitest/no-focused-tests': ['warn', { fixable: false }],
    '@vitest/no-standalone-expect': 'warn',
    '@vitest/no-test-return-statement': 'warn',
    '@vitest/prefer-comparison-matcher': 'warn',
    '@vitest/prefer-equality-matcher': 'warn',
    '@vitest/prefer-expect-resolves': 'warn',
    '@vitest/prefer-hooks-in-order': 'warn',
    '@vitest/prefer-hooks-on-top': 'warn',
    '@vitest/prefer-mock-promise-shorthand': 'warn',
    '@vitest/prefer-strict-equal': 'warn',
    '@vitest/prefer-to-be': 'warn',
    '@vitest/prefer-to-be-object': 'warn',
    '@vitest/prefer-to-contain': 'warn',
    '@vitest/prefer-to-have-length': 'warn',
    '@vitest/prefer-todo': 'warn',
    '@vitest/require-hook': 'warn',
    '@vitest/require-to-throw-message': 'warn',
    '@vitest/valid-title': 'off',
  },
};
