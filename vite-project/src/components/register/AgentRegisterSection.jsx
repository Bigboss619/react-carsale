import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function AgentRegisterSection() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [tokenCode, setTokenCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();

    const { session } = UserAuth();
    console.log(session);
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
    const showSuccess = (message) => {
        setSuccessMessage(message);
        setShowSuccessPopup(true);
        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
    };

    const handleAgentSubmit = async (event) => {
        event.preventDefault(); 
        // Add validation logic here similar to CustomerRegisterSection
       
        // if(firstName.trim() === ""){
        //     showError("First Name cannot be empty");
        //     return;
        // }
        // if(lastName.trim() === ""){
        //     showError("Last Name cannot be empty");
        //     return;
        // }
        // if(email.trim() === ""){
        //     showError("Email cannot be empty");
        //     return;
        // }
        // if(password.trim() === ""){
        //     showError("Password cannot be empty");
        //     return;
        // }
        // if(password.length < 8){
        //     showError("Password must be 8 characters long.");
        //     return;
        // }
        // if(!/\d/.test(password)){
        //     showError("Password must contain at least one number.");
        //     return;
        // }
        // if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        //     showError("Password must contain at least one special character.");
        //     return;
        // }
        // if(tokenCode.trim() === ""){
        //     showError("Token Code cannot be empty");
        //     return;
        // }

        // const agent_email = 'agent123@gmail.com';
        // const agent_password = 'agent123$';
        // const token_code = 'AGENT2024';
        // if (email === agent_email && password === agent_password && tokenCode === token_code) {
        // //   window.location.href = 'agent-dashboard.html';
        //    showSuccess("Registration successful!");
        // } else {
        //   showError("Invalid Email, Password or Token Code");
        // }

        try {
            const response = await fetch('http://localhost:5000/api/agent/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    password: password,
                    token_code: tokenCode,
                }),
            });
            const data = await response.json();
            if (data.error) {
                showError(data.error);
            } else {
                showSuccess("Registration successful!");
                navigate('/about');
            }
        } catch (error) {
            setError('An error occurred during registration.');
        } finally {
            setLoading(false);
        }

    };
  return (
    <>
          <div className="p-6 flex items-center justify-center mt-10" id="customer-registration">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn" id="registerContainer">
                <h2 className="text-2xl font-bold text-center mb-4">Agent Registration</h2>
                <form onSubmit={handleAgentSubmit}  className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input type="text" id="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} name="firstName" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input type="text" id="last_name" 
                         value={lastName} onChange={(e) => setLastName(e.target.value)}name="last_name" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email"
                         value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700">Password</label>
                        <input type={passwordType} id="password" 
                         value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
                            <span className="absolute right-3 top-9 cursor-pointer" onClick={togglePassword}>
                                <i id="eye-icon" className={`fa ${passwordType === 'password' ?  'fa-eye-slash' : 'fa-eye'} text-gray-500`}></i>
                            </span>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Token Code</label>
                        <input type="text" id="token_code"  
                        value={tokenCode}
                            onChange={(e) => setTokenCode(e.target.value)} name="token_code" placeholder="Token Code" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Register</button>
                </form>
            </div>

            {/* <!-- Error Popup --> */}
            {showErrorPopup && (
            <div className="fixed top-10 right-10 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <p>{errorMessage}</p>
            </div>
            )}

            {/* Backend Error popup */}
                {error && (
                <div className="fixed top-10 right-10 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                    <p>{error}</p>
                </div>
                )}

            {/* <!-- Success Popup --> */}
            {showSuccessPopup && (  
            <div className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <p>{successMessage}</p>
            </div>
            )}
    </div>
    </>
  )
}

export default AgentRegisterSection
