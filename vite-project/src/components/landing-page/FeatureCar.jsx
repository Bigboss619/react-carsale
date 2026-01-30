import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link, Typography } from '@mui/material';
import product from '../../store/data';
import  './styles/featureSection.css';

function FeatureCar() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function ro scroll to a specific slide
  const scrollTo = useCallback(
    (index ) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() =>
     {
      if (!emblaApi) return;
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

      emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const featuredCars = product.filter(car => car.feature === 'yes');

  const formatNaira = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount / 100);
  };
  
  console.log(featuredCars);
 
  return (
    <>
      <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-4">Featured Cars</h2>
            <Typography variant="h6" className="text-center text-gray-700">Check out some of our best deals and find your perfect match!</Typography>
            
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                  {featuredCars.map((features) => (
                    <div key={features.id} className="embla__slide">
                          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full mb-9 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                            <div className="relative overflow-hidden h-56">
                                <img src={features.image_main} alt={features.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <p className="text-xl font-bold text-white">{formatNaira(features.priceCents)}</p>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{features.name}</h3>
                                <div className="flex items-center mt-4">
                                    <img src={features.agent_photo} alt={features.agent_name} className="w-10 h-10 rounded-full mr-3 border-2 border-blue-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Agent</p>
                                        <p className="text-base font-semibold">{features.agent_name}</p>
                                    </div>
                                </div>
                                <div className='mt-6 text-white'>
                                   <Link color="" underline="none" to={`/car-details.jsx/${features.id}`} className="mt-12 w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg 
                                   hover:cursor-pointer
                                   hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </Link>
                                </div>
                            </div>
                          </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-center mt-5">
             <Link href="listing.jsx" underline="none" className="mt-6  inline-block bg-blue-400   text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-950 hover:font-bold border-blue-700 border-2 transition ease-linear duration-500 ">See more</Link>
            </div>
          </div>
      </section>
    </>
  )
}

export default FeatureCar