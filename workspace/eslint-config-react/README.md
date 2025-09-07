# @faergeek/eslint-config-react

[![npm](https://nodei.co/npm/@faergeek/eslint-config-react.svg?style=compact)](https://www.npmjs.com/package/@faergeek/eslint-config-react)

## Install

```sh
npm i -D @faergeek/eslint-config-react
```

## Use

Add the following to your `eslint.config.js` or `eslint.config.mjs`.

```javascript
import react from '@faergeek/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([{ extends: [react] }]);
```
