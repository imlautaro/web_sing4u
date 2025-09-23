import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import type { H3Event } from 'h3'

export function useSupabase(event: H3Event, options: { bypassRLS: boolean } = { bypassRLS: false }) {
  const config = useRuntimeConfig(event)

  return options.bypassRLS
    ? createClient<Database>(config.public.supabaseURL, config.supabaseSecretKey)
    : createServerClient<Database>(config.public.supabaseURL, config.public.supabasePublishableKey, {
        cookies: {
          getAll() {
            const cookies = parseCookies(event)
            return Object.keys(cookies).map(key => ({
              name: key,
              value: cookies[key]
            }))
          },
          setAll(cookies) {
            cookies.forEach(({ name, value, options }) =>
              setCookie(event, name, value, options)
            )
          }
        }
      })
}
