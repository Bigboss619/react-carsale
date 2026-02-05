import { supabase } from "../config/supabase.js";
import { signUp, signIn } from "../services/auth.service.js";

export const agentRegister = async (req, res) => {
    const { firstname, lastname, email, password, token_code } = req.body;

    if (!firstname || !lastname || !email || !password || !token_code) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const { data, error } = await signUp(email, password);
        if (error) {
            return res.status(400).json({ error: error.message });
        }

        await supabase.from("agent_register").insert({
            user_id: data.user.id,
            firstname,
            lastname,
            email,
            token_code,
        });
        res.json({ success: true, user: data.user });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }

};

export const loginAgent = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    const { data, error } = await signIn(email, password);
    if (error) {
        return res.status(401).json({ error: "Invalid email or password" });
    }   
    res.json({ success: true, user: data.user, session: data.session, role: "agent", });
};

export const getAgentProfile = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from("agent_register")
        .select("*")
        .eq("user_id", id)
        .single();  
    if (error) {
        return res.status(404).json({ error: "Agent not found" });
    }       
    res.json({ profile: data });
};
