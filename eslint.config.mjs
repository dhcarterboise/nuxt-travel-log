// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default antfu({
// Type of the project. 'lib' for libraries, the default is 'app'
  type: 'app',
  formatters: true,
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4,
    semi: true,
    quotes: 'double'
  },
  jsonc: false,
  yaml: false,
  rules: {},
})