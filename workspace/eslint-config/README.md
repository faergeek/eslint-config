# @faergeek/eslint-config

[![npm](https://nodei.co/npm/@faergeek/eslint-config.svg?style=compact)](https://www.npmjs.com/package/@faergeek/eslint-config)

## Install

```sh
npm i -D @faergeek/eslint-config
```

## Use

Add the following to your `eslint.config.js` or `eslint.config.mjs`.

```javascript
import base from '@faergeek/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([{ extends: [base] }]);
```
