import React from 'react'

function WhyChooseUs() {
  return (
    <>
        <section id="why-choose-us" class="py-16 bg-gray-900 text-white text-center">
            <h2 class="text-4xl font-extrabold mb-10">Why Choose Us?</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {/* <!-- Card 1: Trusted Dealers --> */}
                <div class="choose-card border border-gray-500 bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-500">
                    <img src="settings/verify-badge.png" alt="Trusted Dealers" class="w-20 h-20 mx-auto mb-6" />
                    <h3 class="text-2xl font-semibold mb-3">Trusted Dealers</h3>
                    <p class="text-gray-300 text-lg">We partner with verified and reputable dealers to ensure high-quality service.</p>
                </div>

                {/* <!-- Card 2: Secure Transactions --> */}
                <div class="choose-card border border-gray-500 bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-500">
                    <img src="settings/transaction.png" alt="Secure Transactions" class="w-20 h-20 mx-auto mb-6" />
                    <h3 class="text-2xl font-semibold mb-3">Secure Transactions</h3>
                    <p class="text-gray-300 text-lg">Our platform ensures safe and encrypted transactions for a worry-free experience.</p>
                </div>

                {/* <!-- Card 3: Best Prices --> */}
                <div class="choose-card border border-gray-500 bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-500">
                    <img src="settings/tag.png" alt="Best Prices" class="w-20 h-20 mx-auto mb-6" />
                    <h3 class="text-2xl font-semibold mb-3">Best Prices</h3>
                    <p class="text-gray-300 text-lg">Get competitive prices and amazing deals tailored to your budget.</p>
                </div>

                {/* <!-- Card 4: Excellent Support --> */}
                <div class="choose-card border border-gray-500 bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-500">
                    <img src="settings/customer-service.png" alt="Excellent Support" class="w-20 h-20 mx-auto mb-6" />
                    <h3 class="text-2xl font-semibold mb-3">Excellent Support</h3>
                    <p class="text-gray-300 text-lg">Our 24/7 customer support ensures you get assistance whenever you need it.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs
