# @faergeek/eslint-config

[![npm](https://nodei.co/npm/@faergeek/eslint-config.svg?style=compact)](https://www.npmjs.com/package/@faergeek/eslint-config)

## Install

```sh
npm i -D @faergeek/eslint-config
```

## Use

```javascript
import { base, node, react, typescript, vitest } from '@faergeek/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  base,
  react,
  typescript,
  { files: ['*.js'], extends: [node] },
  { files: ['**/*.spec.*'], extends: [vitest] },
]);
```
