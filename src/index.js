import js from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
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
      'no-empty-function': 'error',
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'time', 'timeEnd', 'timeLog', 'trace'] }],
      'prefer-const': 'error',
      'no-magic-numbers': 'warn',
      'no-unused-vars': 'warn',
      eqeqeq: 'warn',
      'no-inline-comments': 'warn',
      'no-nested-ternary': 'warn',
      'prettier/prettier': [
        'error',
        {
          "trailingComma": "all",
          "tabWidth": 2,
          "semi": true,
          "singleQuote": true,
          "printWidth": 80,
          "arrowParens": "always",
          "bracketSpacing": true,
          "bracketSameLine": true,
          "jsxSingleQuote": true,
          "useTabs": false,
          "endOfLine": "auto",
          overrides: [
            {
              files: '*.json',
              options: {
                printWidth: 200
              }
            }
          ]
        }
      ]
    }
  },
  eslintConfigPrettier
]
