import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''  // your Supabase URL
const supabaseAnonKey = ''  // your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
