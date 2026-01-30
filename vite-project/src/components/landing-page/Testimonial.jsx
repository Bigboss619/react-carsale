import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link, Typography } from '@mui/material';
import  './styles/heroSection.css';

const TestimonialData = [
  {
    id: 1,
    name: "Michael Johnson",
    image: "/Agents/agent1.jpg",
    content: "Amazing selection of cars and friendly staff! They took the time to understand my needs and found me the perfect vehicle. Will definitely be coming back for my next car.!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/Agents/agent6.jpg",
    content: "Excellent service and smooth transaction. The team went above and beyond to ensure I got the perfect car for my needs. Very satisfied!",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/Agents/agent8.jpg",
    content: "Great experience buying my car here! The process was smooth and the staff was extremely helpful. Highly recommend!",
  },
  {
    id: 4,
    name: "Miracle Doe",
    image: "/Agents/agent8.jpg",
    content: "Great experience buying my car here! The process was smooth and the staff was extremely helpful. Highly recommend!",
  },
];
function Testimonial() {
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

  return (
    <>
      <section className="relative py-20 bg-cover bg-center bg-gray-900 text-white" 
      style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/testimonial-bg.avif')`
        }}>
            <div className="container mx-auto px-4">
                <Typography variant="h4" className="font-extrabold text-center mb-4">What Our Customers Say</Typography>
                <Typography variant="h6" align="center" className="text-gray-300 mb-12">Hear from our satisfied customers</Typography>
                <div className="max-w-4xl mx-auto">
                    <div className="embla" ref={emblaRef}>
                      <div className="embla__container">
                        {TestimonialData.map((testimonial) => (
                            <div key={testimonial.id} className="embla__slide">
                              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105">
                                  <div className="flex items-center justify-center mb-6">
                                      <img src={testimonial.image} alt="Customer 1" className="w-20 h-20 rounded-full border-4 border-blue-500" />
                                  </div>
                                  <div className="text-center">
                                      <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                                      <div className="flex justify-center mb-4 text-yellow-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                      </div>
                                      <p className="text-gray-200 italic">{testimonial.content}</p>
                                  </div>
                              </div>
                            </div>
                         ))} 
                       </div> 
                    </div>

                    {/* Dot Navigation */}
                    
                </div>
            </div>
      </section>
    </>
  )
}

export default Testimonial