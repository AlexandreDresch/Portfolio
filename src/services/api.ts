import { createClient } from "@supabase/supabase-js";

export const api = createClient(
  import.meta.env.VITE_API_KEY!,
  import.meta.env.VITE_ANON_KEY!
);
