import { createBrowserClient } from "@supabase/ssr";

import {
  SUPABASE_PROJECT_URL,
  SUPABASE_PUBLIC_ANON_KEY,
} from "@/lib/constants";

export function createClient() {
  return createBrowserClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY);
}
