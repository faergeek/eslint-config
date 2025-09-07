import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default defineConfig({
  extends: [
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    reactHooksPlugin.configs['recommended-latest'],
  ],
  settings: { react: { version: 'detect' } },
  rules: {
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
    'react/no-danger': 'warn',
    'react/no-unused-prop-types': 'warn',
  },
});
