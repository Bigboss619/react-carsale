import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function AgentLoginSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const navigate = useNavigate();
    const { login } = UserAuth();

    const togglePassword = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const showError = (message) => {
        setErrorMessage(message);
        setShowErrorPopup(true);
        setTimeout(() => {
            setShowErrorPopup(false);
        }, 3000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(email.trim() === ""){
            showError("Email cannot be empty");
            return;
         }
        if(password.trim() === ""){
            showError("Password cannot be empty");
            return;
        }
        // setLoading(true);
        try {
            const result = await login(email, password);

            if (result.success) {
                navigate("/pricing");
            } else {
                showError(result.error || "Login failed. Try again.");
            }
        } catch (error) {
            showError("An error occurred during login.");
        } finally {
            // setLoading(false);
        }
    };
  return (
    <>
        <div className="flex justify-center p-3 items-center mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your email" />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700">Password</label>
                        <input type={passwordType}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} id="password" className="w-full p-2 border border-gray-300 rounded mt-1 pr-10" placeholder="Enter your password" />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={togglePassword}>
                            <i id="eye-icon" className={`fa ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`}></i>
                        </span>
                    </div>

                    <div className="mb-4 flex justify-between items-center">
                        <label>
                            <input type="checkbox" className="mr-1" /> Remember Me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </form>

            </div>

            {/* <!-- Error Popup --> */}
            {showErrorPopup && (
            <div className="fixed top-10 right-10 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <p>{errorMessage}</p>
            </div>
            )}
        </div> 
    </>
  )
}

export default AgentLoginSection
