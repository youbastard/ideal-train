module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 2],
    'max-len': 0,
    'new-parens': ['error', 'never'],
    'no-alert': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-extra-semi': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-labels': 'error',
    'no-multi-str': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'object-curly-newline': 1,
    'prefer-const': ['error', { destructuring: 'all' }],
    quotes: ['error', 'single'],
    radix: 'error',
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-function-paren': 2,
    'space-infix-ops': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'valid-typeof': 'error'
  }
};
