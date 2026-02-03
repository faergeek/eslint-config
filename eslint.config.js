import { defineConfig, globalIgnores } from 'eslint/config';

import { base, typescript } from './index.js';

export default defineConfig(globalIgnores(['dist']), {
  extends: [base, typescript],
});
