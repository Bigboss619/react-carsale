import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function CustomerRegisterSection(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();

    const { session } = UserAuth();
    console.log(session);

    // console.log(email, password);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        // setLoading(true);

        if(firstName.trim() === ""){
            showError("First Name cannot be empty");
            return;
        }
        if(lastName.trim() === ""){
            showError("Last Name cannot be empty");
            return;
        }
        if(email.trim() === ""){
            showError("Email cannot be empty");
            return;
        }
        if(password.trim() === ""){
            showError("Password cannot be empty");
            return;
        }
        if(password.length < 8){
            showError("Password must be 8 characters long.");
            return;
        }
        if(!/\d/.test(password)){
            showError("Password must contain at least one number.");
            return;
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            showError("Password must contain at least one special character.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/customers/register",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if(data.error){
                showError(data.error);
            }
            else {
                showSuccess("Registration Successful! You can now log in.");
                navigate('/about');
            }
        } catch (error) {
            setError('an error occurred');
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <div className="flex justify-center items-center p-3 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96"> 
                    <h2 className="text-2xl font-bold text-center mb-4">Customer Registration</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">First Name</label>
                            <input type="text" name="firstName"
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}id="customer_first_name" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Last Name</label>
                            <input type="text" name="lastName"
                            value={lastName} onChange={(e) => setLastName(e.target.value)} id="customer_last_name" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" name="email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            id="customer_email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        
                        <div className="mb-4 relative">
                            <label className="block text-gray-700">Password</label>
                            <input type={passwordType}  
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} id="customer_password" name="password" placeholder="Password" className="password w-full p-2 border border-gray-300 rounded mt-1" />
                                <span className="absolute right-3 top-9 cursor-pointer" onClick={togglePassword}>
                                    <i id="eye-icon" className={`fa ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`}></i>
                                </span>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition" disabled={loading}>{loading ? "Please wait" : "Register"}</button>
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
                <div id="successPopup" className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    <p>{successMessage}</p>
                </div>
                )}
            </div>
        </>
    )
}

export default CustomerRegisterSection