module.exports = {
    env: {
        browser: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
    ],
    extends: [
        './index.js',
        'plugin:react/recommended',
    ],
    rules: {
        'react/no-unescaped-entities': ['error', {forbid: ['>', '}']}],
        'react/jsx-tag-spacing': ['error', {
            beforeSelfClosing: 'never',
            beforeClosing: 'never',
        }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'variableLike',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'property',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'objectLiteralProperty',
                format: null,
            },
        ],
    },
};
