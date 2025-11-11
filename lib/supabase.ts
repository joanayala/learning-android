import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://acwdpfpqaakpuadfkxhr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjd2RwZnBxYWFrcHVhZGZreGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDkyODYsImV4cCI6MjA3ODM4NTI4Nn0.Dn1MruPANkTdhnk0wXB5k_Sy15VeaKueiOLQ6ESonm4';

export const supabase = createClient(
    SUPABASE_URL, 
    SUPABASE_KEY
);