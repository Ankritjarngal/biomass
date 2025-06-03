import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'O&M of Industrial Boilers',
    description:
      'Operation & maintenance of industrial boilers across non-comprehensive, comprehensive, and steam metering-based models — ensuring safe and efficient performance.',
    image: '/29376f23f90bc590e517b6777fd5058a5d74255d.png',
  },
  {
    id: 2,
    title: 'Consultancy Services',
    description:
      'Technical consultancy for industrial boiler setups and biomass fuel integration — tailored to optimize energy efficiency and fuel performance.',
    image: "/Service Image Container.jpg",
  },
  {
    id: 3,
    title: 'O&M of Biomass Plants',
    description:
      'Complete O&M services for biomass power and thermal plants — supporting smooth operations and sustainable energy delivery.',
    image: '/ce15cd05ee2917139f4885b90e8a49cbab21c8f1.png',
  },
];

export default function OurServices() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const isUserScrollingRef = useRef(false);

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
    <section ref={sectionRef} className="px-4 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F7D1F] mb-10 text-center">Our Services</h2>

        {/* Cards Section with horizontal scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-xl flex-shrink-0 overflow-hidden"
              style={{ 
                width: window.innerWidth < 640 ? '280px' : window.innerWidth < 768 ? '320px' : '380px',
                height: window.innerWidth < 640 ? '380px' : window.innerWidth < 768 ? '420px' : '480px'
              }}
            >
              <div 
                className="relative rounded-4xl overflow-hidden" 
                style={{ 
                  height: window.innerWidth < 640 ? '260px' : window.innerWidth < 768 ? '280px' : '400px',
                  width: '100%' 
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full rounded-4xl"
                />
                <div
                  className="absolute inset-0 rounded-4xl pointer-events-none"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white max-w-xs mx-auto leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold pl-1 sm:pl-2 text-gray-700 leading-relaxed">
                  {service.description}
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
}