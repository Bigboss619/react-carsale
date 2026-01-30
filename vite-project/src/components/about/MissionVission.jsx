import React from 'react'

function MissionVission() {
  return (
    <>
        <section className="relative py-16 bg-cover bg-center text-white  transform translate-y-10 transition duration-1000 ease-out animate-fadeInUp" style=
        {{ 
            backgroundImage:  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('settings/mission-bg.jpg')" 
         }} id="mission-vision-sect">
            <div class="bg-black bg-opacity-50 absolute inset-0"></div>

            <div class="relative container mx-auto px-6 lg:px-20">
                <h2 class="text-4xl font-extrabold text-center mb-8">Our Mission & Vision</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* <!-- Mission Section --> */}
                    <div class="mission-card bg-black bg-opacity-50 p-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl animate-bounceIn">
                        <div class="flex items-center mb-6">
                            {/* <img src="settings/mission-icon.png" alt="Mission Icon" class="w-14 h-14 mr-6" /> */}
                            <h3 class="text-3xl font-semibold">Our Mission</h3>
                        </div>
                        <p class="leading-relaxed text-lg">
                            Our mission is to simplify the car buying and selling experience by providing a 
                            reliable, user-friendly, and transparent platform for customers and dealers.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis doloribus magnam veniam illo modi incidunt dolor minima libero animi perferendis, magni temporibus at eligendi deleniti voluptatum voluptates aspernatur iure.
                        </p>
                    </div>

                    {/* <!-- Vision Section --> */}
                    <div class="vision-card bg-black bg-opacity-50 p-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl animate-bounceIn">
                        <div class="flex items-center mb-6">
                            {/* <img src="settings/vision-icon.png" alt="Vision Icon" class="w-14 h-14 mr-6" /> */}
                            <h3 class="text-3xl font-semibold text-white">Our Vision</h3>
                        </div>
                        <p class="leading-relaxed text-white text-lg">
                            Our vision is to be the leading online car marketplace, revolutionizing 
                            the automotive industry with innovative technology and exceptional customer service.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi assumenda nam laudantium ipsum animi facere velit at, optio quaerat obcaecati nihil veniam placeat perferendis omnis consequuntur quas minus deserunt recusandae.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MissionVission
