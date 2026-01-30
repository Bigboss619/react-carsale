import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from '@mui/material';
import  './styles/heroSection.css';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const mobileHeroData = [
  {
    image: "",
    heading: "Find your ride",
    subText: "view listings",
  },
  {
    image: "",
    heading: "drive in style",
    subText: "shop now",
  },
  {
    image: "",
    heading: "luxury on wheels",
    subText: "",
  },
];

function HeroSection() {
  

  return (
      <div className=''>
        {/* Mobile Hero Section */}
        <div className='block md:hidden'>
          <div className=''>
            <div className=''>
              {mobileHeroData.map((item) => (
                <div className='bg-center h-[50vh] flex flex-col items-center justify-center text-white'>
                  <div className='text-xl font-bold mb-2'>
                      {item.heading}
                  </div>
                  <div>
                    {item.subText}
                  </div>
                </div>
              ))}

            </div>


          </div>
        </div>

        {/* Desktop Hero Section */}
          <div className='hidden md:block' id='hero_section_desktop'>
            <section className='relative bg-cover bg-center h-[60vh] md:h-[35vh] lg:h-[65vh] xl:h-[80vh] flex items-center justify-center text-white' style=
                {{
                  backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/landing-page/background.webp')`
                }}>
                <div className='container mx-auto px-4'>
                    <div className='bg-black bg-opacity-60 p-6 md:p-8 rounded-lg text-center max-w-3xl mx-auto animate-fadeIn' id='inner-text'>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Find Your Dream Car Today</h1>
                      <p className="mt-4 text-base md:text-lg">Explore a wide range of premium vehicles</p>
                      <Link to='Listing.jsx' className='mt-6 underline-none inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105'>
                        Browse Listings
                        <i className="fas fa-arrow-right ml-2"></i>
                        {/* <ArrowRightAlt  className='ml-2' /> */}
                      </Link>
                    </div>
                </div>
            </section>
          </div>
      </div>
  )
}

export default HeroSection
