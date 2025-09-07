# opinionated configs for eslint

## Install all

```sh
npm i -D @faergeek/eslint-config @faergeek/eslint-config-react @faergeek/eslint-config-typescript @faergeek/eslint-config-vitest
```

## Use all

```javascript
import base from '@faergeek/eslint-config';
import react from '@faergeek/eslint-config-react';
import typescript from '@faergeek/eslint-config-typescript';
import vitest from '@faergeek/eslint-config-vitest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  { extends: [base, react, typescript] },
  { files: ['**/*.spec.*'], extends: [vitest] },
]);
```
