// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uocdjklgmacbnzzthaxg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvY2Rqa2xnbWFjYm56enRoYXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjYzNTEsImV4cCI6MjA2NTE0MjM1MX0.aLbDw6l7rwVJPQ3wqlY9ZmtPqINU7JJDgOiIQblmtoA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);