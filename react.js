module.exports = {
  extends: [
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: { 'shared-node-browser': true },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-key': [
      'warn',
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true },
    ],
    'react/no-danger': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/require-render-return': 'off',
  },
};
