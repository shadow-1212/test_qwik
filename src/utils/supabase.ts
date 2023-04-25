import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonPublic = import.meta.env.PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonPublic)
