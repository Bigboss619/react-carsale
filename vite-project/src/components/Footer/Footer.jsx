import React from 'react'
import { Link, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Navigation Links --> */}
            <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul>
                    <li><a href="home.jsx" className="hover:text-blue-500">Home</a></li>
                    <li><a href="listing.jsx" className="hover:text-blue-500">Listings</a></li>
                    <li><a href="about.jsx" className="hover:text-blue-500">About</a></li>
                    <li><a href="contact.jsx" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
            
            {/* <!-- Contact Info --> */}
            <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <p>Email: support@carsale.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Main Street, City, Country</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.1v-2.88h2.1v-2.2c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3v1.94h2.3l-.37 2.88h-1.93v6.99A10 10 0 0022 12z"/></svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.84 12.84 0 013 4.89a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 013 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"/></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.6v1.71h.05a3.95 3.95 0 013.55-1.95c3.8 0 4.5 2.5 4.5 5.75V21h-4v-5.5c0-1.3-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg>
                    </a>
                </div>
            </div>
                
            {/* <!-- Newsletter Subscription --> */}
            <div>
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p>Subscribe to get the latest updates on car listings.</p>
                <FormControl className="mt-4" aria-label="Subscribe to newsletter">
                    <InputLabel for="newsletter-email" htmlFor="my-input" className="sr-only">Email address</InputLabel>
                    <Input id="newsletter-email my-input" aria-describedby="my-helper-text" type="email" placeholder="Enter your email" required className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    <FormHelperText id="my-helper-text" className='text-red-700'>We'll never share your email</FormHelperText>
                    <button type="submit" className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Subscribe</button>
                </FormControl>
            </div>
        </div>
        <div className="mt-12 text-center text-gray-400 text-sm">
            &copy; 2024 CarSale. All rights reserved.
        </div>
      </footer>

    </>
  )
}

export default Footer