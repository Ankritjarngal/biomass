import React, { useEffect, useRef } from 'react';

const AboutUsMain = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const isUserScrollingRef = useRef(false);

  const cardData = [
    {
      image: "/Feature image.png",
      alt: "Eco-Friendly Energy",
      title: "Eco-Friendly Energy",
      description: "Biomass Fuels Offer Easy Handling And Reliable Performance, Cutting Carbon Emissions By 4-5 Times!"
    },
    {
      image: "/Feature image (1).png",
      alt: "Driving Clean Industrial Transformation",
      title: "Driving Clean Industrial Transformation",
      description: "Our Fuels Aid Decarbonization, Cut Costs, And Boost Safety—Driving Change For Industries."
    },
    {
      image: "/e466b3c0631937cc03ee9945951d8474a9283c7f.jpg",
      alt: "Engineered Effortless Operation",
      title: "Engineered for Effortless Operation",
      description: "Low-Density Biomass Fuels Offer Smooth Feeding And Reliable Performance With Minimal Upkeep."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollContainerRef.current) {
            // Start auto-scroll after 2 seconds delay
            setTimeout(() => {
              startAutoScroll();
            }, 2000);
          } else {
            stopAutoScroll();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) return;
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (isUserScrollingRef.current) return;
        
        const container = scrollContainerRef.current;
        if (container) {
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const currentScroll = container.scrollLeft;
          const maxScroll = scrollWidth - clientWidth;
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Scroll to next position
            const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 380;
            const spacing = window.innerWidth < 640 ? 16 : window.innerWidth < 768 ? 24 : 32;
            const nextScroll = Math.min(currentScroll + cardWidth + spacing, maxScroll);
            
            container.scrollTo({
              left: nextScroll,
              behavior: 'smooth'
            });
          }
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    // Handle user scroll interactions
    const handleUserScroll = () => {
      isUserScrollingRef.current = true;
      setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 1000);
    };

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleUserScroll);
      scrollContainerRef.current.addEventListener('touchstart', handleUserScroll);
    }

    return () => {
      stopAutoScroll();
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleUserScroll);
        scrollContainerRef.current.removeEventListener('touchstart', handleUserScroll);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-us px-4 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 mt-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-8">About Us</h2>
          <p className="md:w-1/2 text-base font-bold">
            Our Company Provides Environmentally Sustainable Solid Green Fuels And Innovative Solutions Specifically Designed For Industrial Boilers.
          </p>
        </div>

        {/* Cards Section with horizontal scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-xl flex-shrink-0 overflow-hidden"
              style={{ 
                width: window.innerWidth < 640 ? '280px' : window.innerWidth < 768 ? '320px' : '380px',
                height: window.innerWidth < 640 ? '420px' : window.innerWidth < 768 ? '460px' : '510px'
              }}
            >
              <div 
                className="relative rounded-4xl overflow-hidden" 
                style={{ 
                  height: window.innerWidth < 640 ? '300px' : window.innerWidth < 768 ? '320px' : '400px',
                  width: '100%' 
                }}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="object-cover h-full w-full rounded-4xl"
                />
                <div
                  className="absolute inset-0 rounded-4xl pointer-events-none"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white max-w-xs mx-auto leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="p-2 pt-4 sm:p-4">
                <p className="text-xs sm:text-sm md:text-base font-semibold pl-1 sm:pl-2 md:pl-4 text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AboutUsMain;