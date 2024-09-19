import js from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  js.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports
    }
  },
  {
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
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-magic-numbers': 'warn',
      'no-unused-vars': 'warn',
      eqeqeq: 'warn',
      'no-inline-comments': 'warn',
      'no-nested-ternary': 'warn'
    }
  }
]
