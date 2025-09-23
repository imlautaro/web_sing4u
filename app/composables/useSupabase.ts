import type { RequiredClaims, SupabaseClient } from '@supabase/supabase-js'

export const useSupabase = () => useNuxtApp().$supabase as SupabaseClient<Database>

export const useUser = () => useState<(RequiredClaims) | null | undefined>('user', () => undefined)
