import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        extends: ['airbnb-base', 'eslint:recommended'],
        rules: {
            'no-console': 'warn',
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
        },
    },
]);