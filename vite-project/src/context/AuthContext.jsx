import { createContext, useEffect, useState, useContext } from "react";
// import supabase  from "../lib/supabase-client";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [role, setRole] = useState(null); // "agent" or "customer"
    const API_BASE = import.meta.env.VITE_API_BASE;

    console.log("API BASE:", API_BASE);

    // Load session from localStorage on refresh
        useEffect(() => {
            const initAuth = async () => {
                const storedSession = localStorage.getItem("session");
                
                if (storedSession) {
                    const parsed = JSON.parse(storedSession);
                    
                    if(parsed?.user){
                        // Fetch user profile if session exists
                        setSession(parsed.session);
                        setUser(parsed.user);
                        await fetchUserProfile(parsed.user.id);
                    }
                }
                setLoading(false);
            };
            initAuth();
        }, []);

    // LOGIN
        const login = async (email, password, role = 'customer') => {
            // setLoading(true);
            const endpoint = role === 'agent' ? '/api/agent/login' : '/api/customers/login';
            try {
                const res = await fetch(`${API_BASE}${endpoint}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const data = await res.json().catch(() => null);

                if(!res.ok){
                    return { success: false, error: data.error || "Login failed" };
                }

                setSession(data.session);
                setUser(data.user);
                localStorage.setItem(
                    "session",
                    JSON.stringify({
                        session: data.session,
                        user: data.user
                        })
                );

                await fetchUserProfile(data.user.id);

                setSuccessMessage("Login successful!");
                // setLoading(false);

                return { success: true };
            } catch (err) {
                console.error("Login error:", err);
                // setLoading(false);
                return { success: false, error: "An error occurred during login." };
            }
        };


    // Fetch user profile from user_register table
    const fetchUserProfile = async (userId) => {
        try {

            // Check agent first
            let res = await fetch(
                `${API_BASE}/api/agent/profile/${userId}`
            );
            let data = await res.json();

            if(res.ok && data.profile){
                setUserProfile(data.profile);
                setRole("agent");
                console.log("User profile set as agent:", data.profile);
                return;
            }

            // Else check customer
            res = await fetch(
                `${API_BASE}/api/customers/profile/${userId}`
            );
            data = await res.json();

            console.log("Fetched profile data:", data);
            console.log("Fetching profile for userId:", userId);

            if(res.ok && data.profile){
                setUserProfile(data.profile);
                setRole("customer");
                console.log("User profile set as customer:", data.profile);
                return;
            }

            setUserProfile(null);
            setRole(null);
            
        } catch (err) {
            console.error("Fetch profile error:", err);
        }
    };


    

    // Sign Out
    const logout = () => {
        setSession(null);
        setUser(null);
        setUserProfile(null);
        localStorage.removeItem("session");
    }; 

    return (
        <AuthContext.Provider value={{ session, user, userProfile, role, loading, login, logout, successMessage, setSuccessMessage }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}