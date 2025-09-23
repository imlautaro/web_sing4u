// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // allow explicit any
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
)
