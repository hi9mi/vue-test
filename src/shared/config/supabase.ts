import { createClient } from "@supabase/supabase-js";

import { getParsedEnv } from "@app/shared/env";
import type { Database } from "@app/shared/types";

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = getParsedEnv();

export const supabase = createClient<Database>(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
