module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
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
    'react/jsx-no-target-blank': [
      'error',
      { allowReferrer: true, warnOnSpreadAttributes: true },
    ],
    'react/jsx-uses-react': 'off',
    'react/no-danger': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'off',
  },
};
