import React from 'react'

function ContactSection() {
  return (
    <>
         <section id="contact" className="container mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* <!-- Contact Form --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label for="name" className="block text-gray-700">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full p-3 border rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-3 border rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label for="message" className="block text-gray-700">Message</label>
                            <textarea id="message" name="message" className="w-full p-3 border rounded-lg h-32" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Send Message</button>
                    </form>
                    
                    {/* <!-- Customer Support Info --> */}
                    <div className="mt-6 border-t pt-4 text-gray-700">
                        <h3 className="text-lg font-semibold">Customer Support</h3>
                        <p className="mt-2"><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Email:</strong> support@example.com</p>
                        <p><strong>Working Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
                    </div>
                </div>
        
                {/* <!-- Map Section --> */}
                <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1022158400287!2d3.3487132737296506!3d6.50874422333725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3b71a46f1d%3A0x4f4b550e1e6acac2!2sAjao%20St%2C%20Ikate%2C%20Shitta%2FOgunlana%20Drive%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1743167068353!5m2!1sen!2sng" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default ContactSection
