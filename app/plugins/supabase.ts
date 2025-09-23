import { createBrowserClient } from '@supabase/ssr'

export default defineNuxtPlugin(async (nuxtApp) => {
  const supabase = createBrowserClient(nuxtApp.$config.public.supabaseURL, nuxtApp.$config.public.supabasePublishableKey)

  nuxtApp.hooks.hook('app:mounted', () => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'INITIAL_SESSION') return

      setTimeout(async () => {
        const { data } = await supabase.auth.getClaims()
        useUser().value = data?.claims
      }, 0)
    })
  })

  return { provide: { supabase } }
})
