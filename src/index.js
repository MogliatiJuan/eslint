import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    extends: ['love', 'important-stuff'],
    plugins: ['simple-import-sort', 'unused-imports'],
    env: { node: true },
    globals: { NodeJS: true },
    rules: {
      'simple-import-sort/exports': 'error',
      'no-await-in-loop': 'error',
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
          allowNamedExports: false
        }
      ],
      camelcase: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'max-depth': ['warn', 5],
      'max-lines': ['error', 600],
      'no-empty-function': 'error',
      'no-magic-numbers': 'error',
      eqeqeq: 'warn',
      'no-unused-vars': 'off',
      'no-inline-comments': 'warn',
      'no-nested-ternary': 'warn'
    }
  }
]
