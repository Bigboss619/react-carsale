import React, { useEffect, useState } from 'react'
import Container from '../container/Container.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserAuth } from '../../context/AuthContext.jsx'

function Header() {
    const { user, userProfile, role, loading, logout, successMessage, setSuccessMessage } = UserAuth();
        console.log(userProfile);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (successMessage) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
                setSuccessMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, setSuccessMessage]);
    // This code is for the signout logic
    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            logout();
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }
const navigate = useNavigate();
const navItems = [
    {
        name: "Home",
        slug: "/",
    },
    {
        name: "About",
        slug: "/about",
    },
    {
        name: "Listings",
        slug: "/listing",
    },
    {
        name: "Contact",
        slug: "/contact",
    },
    {
        name: "Agents",
        slug: "/agents",
    },
    {
        name: "Pricing",
        slug: "/pricing",
    }
    
]

  return (
    <Container>
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md py-4 md:sticky md:top-0">
            <div className="container mx-auto px-4 flex items-center justify-between" id='navs-section'>
                {/* Logo/Brand */}
                <div className="text-2xl font-bold text-blue-600" id="home-button">
                    <Link to="/">CarSale</Link>
                </div>
                
                {/* Navigation Links */}
                <div className="hidden md:flex font-semibold space-x-6" id='navs-link'>
                    {navItems.map((item) => (
                        <span key={item.name}>
                            <Link 
                                to={item.slug}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-bold duration-200"
                            >
                                {item.name}
                            </Link>
                        </span>
                    ))}
                </div>
                    

                {/* Login/Register Button */}
                <div className='hidden md:flex items-center space-x-4' id="login-register-section">
                    {loading ? null : (
                        !user ? (
                            <>
                                {/* Guest */}
                                <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 font-bold">
                                    Login
                                </Link>
                                <Link to="/register" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200 font-bold">
                                    Register
                                </Link>
                            </>
                    ) : (
                        <>
                            {/* Role-based dashboard link */}
                            {role === "agent" && (
                                <Link to="/pricing" className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200 font-bold">
                                    Agent Dashboard
                                </Link>
                            )}
                            {role === "customer" && (
                                <Link to="/pricing" className="ml-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200 font-bold">
                                    Customer Dashboard
                                </Link>
                            )}
                            <button
                                onClick={handleSignOut}
                                className="ml-4 px-4 py-2 bg-red-600 text-white hover:cursor-pointer rounded hover:bg-red-700 transition-colors duration-200 font-bold">
                                Sign Out
                            </button>
                        </>
                    )
                )}

                </div>
                
                <button className='md:hidden text-gray-700' id='mobile-menu-button'>
                    $#9776;
                </button>
            </div>
        </nav>

        {/* Success Message Banner */}
        {showSuccess && successMessage && (
            <div className="bg-green-500 text-white text-center py-2 px-4">
                <p>{successMessage}</p>
            </div>
        )}
    </Container>
  )
}

export default Header
