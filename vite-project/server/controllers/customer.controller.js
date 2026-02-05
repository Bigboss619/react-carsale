import { supabase } from "../config/supabase.js";
import { signUp, signIn } from "../services/auth.service.js";

export const registerCustomer = async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        try {
            // 1️⃣ Sign up user in Supabase Auth
            const { data, error } = await signUp(email, password);
            if (error) return res.status(400).json({ error: error.message });

            // 2️⃣ Insert user profile into user_register table
            await supabase.from("user_register").insert([
                {
                    user_id: data.user.id,
                    firstname,
                    lastname,
                    email,
                },
            ]);
            // 3️⃣ Success
            res.json({ success: true, user: data.user });
        } catch (err) {
        res.status(500).json({ error: "Internal server error" });
        }
};


export const loginCustomer = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const { data, error } = await signIn(email, password );
    if (error) {
        return res.status(401).json({
            success: false,
            error: "Invalid email or password",
        });
    }
    res.json({ 
        success: true, 
        user: data.user ,
        session:data.session,
        role: "customer",
     });
};

export const getCustomerProfile = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("user_register")
        .select("*")
        .eq("user_id", id)
        .single();

    if (error) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json({ profile: data });
};