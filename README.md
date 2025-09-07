# @faergeek/eslint-config

## Install

```sh
npm i -D @faergeek/eslint-config
```

## Use

```javascript
import { base, react, typescript, vitest } from '@faergeek/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  base,
  react,
  typescript,
  { files: ['**/*.spec.*'], extends: [vitest] },
]);
```
