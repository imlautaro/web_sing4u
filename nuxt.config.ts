// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    supabaseSecretKey: import.meta.env.SUPABASE_SECRET_KEY,
    public: {
      supabaseURL: import.meta.env.SUPABASE_URL,
      supabasePublishableKey: import.meta.env.SUPABASE_PUBLISHABLE_KEY
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'web-sing4u',
        routes: [
          {
            pattern: 'www.sing4u.app',
            custom_domain: true
          },
          {
            pattern: 'sing4u.app',
            custom_domain: true
          }
        ]
      }
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
