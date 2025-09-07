# @faergeek/eslint-config-typescript

[![npm](https://nodei.co/npm/@faergeek/eslint-config-typescript.svg?style=compact)](https://www.npmjs.com/package/@faergeek/eslint-config-typescript)

## Install

```sh
npm i -D @faergeek/eslint-config-typescript
```

## Use

Add the following to your `eslint.config.js` or `eslint.config.mjs`.

```javascript
import typescript from '@faergeek/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([{ extends: [typescript] }]);
```
