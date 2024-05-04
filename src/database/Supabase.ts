import { createClient } from '@supabase/supabase-js'
import { appConfig } from '../config/config'

const supabaseUrl = appConfig.SUPABASE.supabaseUrl
const supabaseKey = appConfig.SUPABASE.apiKey
export const supabase = createClient(supabaseUrl, supabaseKey)

