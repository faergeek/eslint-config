import { defineConfig } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';

export const typescript = defineConfig({
  extends: [typescriptEslint.configs.recommended],
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-shadow': 'off',
  },
});
