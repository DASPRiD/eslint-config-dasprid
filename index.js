module.exports = {
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prefer-arrow',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    settings: {
        'import/parsers': {
            "@typescript-eslint/parser": ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
            exports: {},
        },
    },
    rules: {
        // Suggestions
        'yoda': ['error', 'never'],

        // Layout & Formatting
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error', {before: true, after: true}],
        'block-spacing': ['error', 'always'],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'generator-star-spacing': ['error', {before: true, after: true}],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'line-comment-position': ['error', {position: 'above'}],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
        }],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': ['error', 'always'],
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                'checksVoidReturn': {
                    // There are cases where this is valid, e.g. in order to use async functions in event handlers.
                    // When doing so, it should be made sure though to handle all possible errors within the event
                    // handler!
                    attributes: false,
                    arguments: false,
                },
            },
        ],
        'no-multi-spaces': ['error'],
        'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}],
        'no-tabs': ['error'],
        'no-trailing-spaces': ['error'],
        'no-whitespace-before-property': ['error'],
        'object-property-newline': ['error', {'allowMultiplePropertiesPerLine': true}],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'rest-spread-spacing': ['error', 'never'],
        'semi-spacing': ['error', {before: false, after: true}],
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        'switch-colon-spacing': ['error', {before: false, after: true}],
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-iife': ['error', 'inside'],
        'wrap-regex': ['error'],
        'yield-star-spacing': ['error', {before: true, after: true}],

        // Prefer Arrow Functions
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ],

        // Imports
        'import/no-unresolved': ['error', {commonjs: true, amd: true}],
        'import/newline-after-import': ['error'],
        'import/order': ['error', {
            'newlines-between': 'never',
            'alphabetize': {order: 'asc', caseInsensitive: true},
        }],

        // TypeScript Extensions
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': ['error', {before: false, after: true}],
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            ignoredNodes: [
                'TSTypeParameterInstantiation', // Broken
            ],
        }],
        '@typescript-eslint/keyword-spacing': ['error', {before: true, after: true}],
        '@typescript-eslint/no-empty-function': ['error', {
            allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions'],
        }],
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        '@typescript-eslint/no-throw-literal': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: 'multiline-block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-block-like'},
        ],
        '@typescript-eslint/quotes': ['error', 'single', {avoidEscape: true}],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        '@typescript-eslint/space-infix-ops': ['error'],

        // TypeScript
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
                readonly: 'array-simple',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
        }],
        '@typescript-eslint/consistent-type-exports': ['error'],
        '@typescript-eslint/consistent-type-imports': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error'],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
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
        '@typescript-eslint/no-confusing-void-expression': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-invalid-void-type': ['error'],
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', {
            ignoreRestSiblings: true,
        }],
        '@typescript-eslint/prefer-for-of': ['error'],
        '@typescript-eslint/prefer-includes': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error'],
        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-regexp-exec': ['error'],
        '@typescript-eslint/prefer-return-this-type': ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
        '@typescript-eslint/prefer-ts-expect-error': ['error'],
        '@typescript-eslint/promise-function-async': ['error'],
        '@typescript-eslint/require-array-sort-compare': ['error'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        '@typescript-eslint/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': ['error'],
            },
        },
    ],
};
