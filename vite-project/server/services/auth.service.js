// import { supabase } from "../signconfig/supabase";
import { supabase } from "../config/supabase.js";
export const signUp = async (email, password) =>{
    return supabase.auth.signUp({ email, password });
};

export const signIn = async (email, password) =>{
    return supabase.auth.signInWithPassword({ email, password });
};