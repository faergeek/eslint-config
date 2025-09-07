# @faergeek/eslint-config-vitest

[![npm](https://nodei.co/npm/@faergeek/eslint-config-vitest.svg?style=compact)](https://www.npmjs.com/package/@faergeek/eslint-config-vitest)

## Install

```sh
npm i -D @faergeek/eslint-config-vitest
```

## Use

Add the following to your `eslint.config.js` or `eslint.config.mjs`.

```javascript
import vitest from '@faergeek/eslint-config-vitest';
import { defineConfig } from 'eslint/config';

export default defineConfig([{ extends: [vitest] }]);
```
