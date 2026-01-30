import React from 'react'

function PricingSection() {
     document.addEventListener("DOMContentLoaded", function () {
        function revealOnScroll() {
            let cards = document.querySelectorAll("[data-animate]");
            let windowHeight = window.innerHeight;
            
            cards.forEach(card => {
                let cardTop = card.getBoundingClientRect().top;
                if (cardTop < windowHeight - 100) {
                    card.classList.add("opacity-100");
                }
            });
        }
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Trigger on load
    });
  return (
    <>
        <section id="pricing" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Pricing Plans</h2>
                <p className="text-gray-600 mt-2">Choose the plan that best fits your needs.</p>
            </div>
        
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {/* <!-- Basic Plan --> */}
                <div className="card bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 " data-animate>
                    <h2 className="text-2xl font-semibold text-gray-800">Basic</h2>
                    <h3 className="text-4xl font-bold text-blue-600 mt-2">$19</h3>
                    <h4 className="text-gray-500">(15 Days)</h4>
                    <hr className="my-4" />
                    <ul className="text-gray-700">
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 5 Properties Allowed</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-bold inline-block text-black text-lg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> No Featured Property</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 2 Photos per Property</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        1 Videos per Property</li>
                        
                        
                    </ul>
                    <a href="#" className="block text-center hover:bg-gray-900 hover:font-bold transition ease-out duration-500 mt-4 py-2 bg-blue-600 text-white rounded-lg">Choose Plan</a>
                </div>
        
                {/* <!-- Standard Plan --> */}
                <div className="card bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105" data-animate>
                    <h2 className="text-2xl font-semibold text-gray-800">Standard</h2>
                    <h3 className="text-4xl font-bold text-blue-600 mt-2">$29</h3>
                    <h4 className="text-gray-500">(30 Days)</h4>
                    <hr className="my-4" />
                    <ul className="text-gray-700">
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 10 Properties Allowed</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 5 Featured Properties</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 3 Photos per Property</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 2 Videos per Property</li>
                    </ul>
                    <a href="#" className="block text-center hover:bg-gray-900 hover:font-bold transition ease-out duration-500 mt-4 py-2 bg-blue-600 text-white rounded-lg">Choose Plan</a>
                </div>
        
                {/* <!-- Gold Plan --> */}
                <div className="card bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105" data-animate>
                    <h2 className="text-2xl font-semibold text-gray-800">Gold</h2>
                    <h3 className="text-4xl font-bold text-blue-600 mt-2">$39</h3>
                    <h4 className="text-gray-500">(60 Days)</h4>
                    <hr className="my-4" />
                    <ul className="text-gray-700">
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 15 Property Allowed</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 10 Featured Properties</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 5 Photos per Property</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 font-extrabold inline-block text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> 5 Videos per Property</li>
                    </ul>
                    <a href="#" className="block text-center hover:bg-gray-900 hover:font-bold transition ease-out duration-500 mt-4 py-2 bg-blue-600 text-white rounded-lg">Choose Plan</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default PricingSection
