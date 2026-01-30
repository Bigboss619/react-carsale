import React from 'react'

function CompanyStory() {
  return (
    <>
        <section className="bg-gray-100 py-16 -mt-10 transform translate-y-10 transition duration-1000 ease-out animate-fadeInUp">
        <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center align-top">
                {/* <!-- Text Section --> */}
                <div className="flex flex-col items-center md:items-start -mt-16 space-y-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        CarSale was founded with a vision to make car buying and selling seamless, transparent, 
                        and efficient. With years of experience in the automobile industry, we have built a platform 
                        that connects buyers and sellers with ease.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Under the leadership of our Founder & CEO, <span className="font-semibold text-blue-600">Chike Anyalechi</span>, 
                        we have grown into a trusted marketplace where individuals and dealers can find the perfect vehicle 
                        at the best price.
                    </p>
                </div>

                {/* <!-- Image Section --> */}
                <div className="flex flex-col justify-center">
                    {/* <!-- Company Image --> */}
                    <img src="settings/company's image.jpg" alt="CarSale Company" className="w-full h-60 object-cover rounded-xl shadow-lg mb-8" />

                    {/* <!-- Founder Image & Info --> */}
                    <div className="text-center">
                        <img src="settings/Company-Owner.jpg" alt="Chike Anyalechi" className="w-36 h-36 rounded-full mx-auto shadow-xl" />
                        <h3 className="text-2xl font-semibold text-gray-900 mt-4">Chike Anyalechi</h3>
                        <p className="text-gray-700 text-lg">Founder & CEO</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default CompanyStory
