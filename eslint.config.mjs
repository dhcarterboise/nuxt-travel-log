import antfu from '@antfu/eslint-config'
// @ts-check

export default antfu({
  type: 'app',
  formatters: true,
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4,
    semi: true,
    quotes: 'double',
  },
  jsonc: false,
  yaml: false,
  rules: {
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '. ',
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: ['README.md'],
    }],
  },

})
