import React from 'react'
import { Link } from 'react-router-dom'
function LoginSection() {
  return (
    <>
        <div className="flex justify-center items-center mt-10 p-3">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center animate-fadeIn" id="registerContainer">
                <h2 className="text-2xl font-bold mb-4">Login as</h2>
                <div className="space-y-4">
                    <Link to="/agent-login" className="block bg-blue-500 text-white py-3 rounded-lg text-lg hover:font-bold hover:bg-blue-600 transition">Agent</Link>
                    
                    <Link to="/customer-login" className="block bg-gray-500 text-white py-3 rounded-lg text-lg hover:font-bold hover:bg-gray-600 transition">Customer</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginSection
