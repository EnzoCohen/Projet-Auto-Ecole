import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Prevent crash if Supabase is not configured yet
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            insert: () => Promise.resolve({ error: { message: "Supabase n'est pas configuré. Ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans le fichier .env" } }),
            select: () => Promise.resolve({ data: [], error: null })
        })
    } as any

export type Appointment = {
    id?: number
    name: string
    email: string
    phone: string
    date: string
    license_type: string
    created_at?: string
}
