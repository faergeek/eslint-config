import eslint from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import reactPluginConfigRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export const base = [
  eslint.configs.recommended,
  {
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
      'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
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
        {
          block: { balanced: true },
          markers: ['/'],
        },
      ],
      strict: ['warn', 'never'],
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
];

export const browser = [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];

export const node = [
  {
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
];

export const react = [
  reactPluginConfigRecommended,
  {
    languageOptions: {
      globals: globals['shared-node-browser'],
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];

export const typescript = [
  ...typescriptEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        { 'ts-ignore': 'allow-with-description' },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { ignoreRestSiblings: true },
      ],
      'no-shadow': 'off',
    },
  },
];

export const vitest = [
  vitestPlugin.configs.recommended,
  {
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    rules: {
      'vitest/consistent-test-it': [
        'warn',
        { fn: 'test', withinDescribe: 'it' },
      ],
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': ['warn', { fixable: false }],
      'vitest/no-standalone-expect': 'warn',
      'vitest/no-test-return-statement': 'warn',
      'vitest/prefer-comparison-matcher': 'warn',
      'vitest/prefer-equality-matcher': 'warn',
      'vitest/prefer-expect-resolves': 'warn',
      'vitest/prefer-hooks-in-order': 'warn',
      'vitest/prefer-hooks-on-top': 'warn',
      'vitest/prefer-mock-promise-shorthand': 'warn',
      'vitest/prefer-strict-equal': 'warn',
      'vitest/prefer-to-be': 'warn',
      'vitest/prefer-to-be-object': 'warn',
      'vitest/prefer-to-contain': 'warn',
      'vitest/prefer-to-have-length': 'warn',
      'vitest/prefer-todo': 'warn',
      'vitest/require-hook': 'warn',
      'vitest/require-to-throw-message': 'warn',
      'vitest/valid-title': 'off',
    },
  },
];
