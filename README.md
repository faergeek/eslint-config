# @faergeek/eslint-config

## Install

```sh
npm i -D @faergeek/eslint-config
```

## Use

```javascript
import { base, react, typescript, vitest } from '@faergeek/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  { extends: [base, react, typescript, vitest] },
]);
```
