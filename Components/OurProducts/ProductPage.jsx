import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import BiomassAdvantages from "../Advantage";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import { useNavigate } from "react-router-dom";

const ProductPage = ({
  title,
  description,
  heroImage,
  stats,
  cards,
  discoverProducts,
  variants, // New prop for variants
}) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const infoCardsRef = useRef(null);
  const infoCardsSectionRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const isUserScrollingRef = useRef(false);

  // All available products
  const allProducts = [
    { name: 'Briquettes', img: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png', alt: 'Briquettes', link: '/briquettes' },
    { name: 'Pellets', img: '/Product card.png', alt: 'Pellets', link: '/pellets' },
    { name: 'Woodchips', img: '/Container-1.png', alt: 'Woodchips', link: '/wood-chips' },
    { name: 'Palm Nut Shell', img: '/Product card-2.png', alt: 'Palm Nut Shell', link: '/palm-nut-shell' },
    { name: 'Paddy Husk', img: '/Product card-1.png', alt: 'Rice Husk', link: '/rice-husk' },
    { name: 'Bagasse Dust', img: '/Container-2.png', alt: 'Bagasse Dust', link: '/baggasse-dust' },
    { name: 'Saw Dust', img: '/Saw dust image new.png', alt: 'Saw Dust', link: '/saw-dust' },
    { name: 'Coffee Nut Shell', img: '/Product imag.png', alt: 'Coffee Nut Shell', link: '/coffee-nut-shell' },
    { name: 'Cashew Nut Shell', img: '/Feature image section.png', alt: 'Cashew Nut Shell', link: '/cashew-nut-shell' },
  ];

  // Filter out the current product based on title
  const otherProducts = allProducts.filter(product => 
    product.name.toLowerCase() !== title.toLowerCase()
  );

  // Auto-scroll functionality for info cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && infoCardsRef.current) {
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
        
        const container = infoCardsRef.current;
        if (container && window.innerWidth < 1024) { // Only on smaller screens
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
            // Calculate scroll distance to show next card
            const cardWidth = 320;
            const spacing = 32; // space-x-[32px]
            const viewportWidth = clientWidth;
            const cardsPerView = Math.floor(viewportWidth / (cardWidth + spacing));
            const scrollDistance = (cardWidth + spacing) * Math.max(1, cardsPerView);
            const nextScroll = Math.min(currentScroll + scrollDistance, maxScroll);
            
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

    if (infoCardsSectionRef.current) {
      observer.observe(infoCardsSectionRef.current);
    }

    if (infoCardsRef.current) {
      infoCardsRef.current.addEventListener('scroll', handleUserScroll);
      infoCardsRef.current.addEventListener('touchstart', handleUserScroll);
    }

    return () => {
      stopAutoScroll();
      if (infoCardsSectionRef.current) {
        observer.unobserve(infoCardsSectionRef.current);
      }
      if (infoCardsRef.current) {
        infoCardsRef.current.removeEventListener('scroll', handleUserScroll);
        infoCardsRef.current.removeEventListener('touchstart', handleUserScroll);
      }
    };
  }, []);

  const handleProductClick = (productLink) => {
    navigate("/products" + productLink);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Small delay to ensure navigation completes first
  };

  return (
    <div>
      <Navbar />
      <div >
      <div
  className="py-10"
  style={{
    background:
      'linear-gradient(0deg, rgba(149, 112, 76, 0.4) 0%, rgba(149, 112, 76, 0.22) 50%, rgba(149, 112, 76, 0.02) 100%)',
  }}
>
<div className="container mx-auto px-4 lg:px-8 xl:px-12 flex flex-col md:flex-row items-center">
  {/* Section 1: Title and Description */}
  <div className="md:w-2/5 text-left md:pr-4 lg:pr-6 xl:pr-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#257E2C]">{title}</h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">{description}</p>
  </div>

  {/* Section 2: Image */}
  <div className="md:w-3/5 mt-8 md:mt-0 flex justify-center">
    <div className="w-4/5">
      <img
        src={heroImage}
        alt={title}
        className="mx-auto w-full h-auto scale-90"
      />
    </div>
  </div>

  {/* Section 3: Stats */}
  <div className="w-full md:w-2/5 flex flex-col items-start justify-center space-y-8 mt-8 md:mt-20 px-6 md:px-10 lg:pr-6 xl:pr-8">
    {stats.slice(0, 3).map((stat, idx) => (
      <div key={idx} className="text-left w-full relative" >
        <h2 className="text-[#257E2C] text-xl sm:text-2xl md:text-3xl font-bold inline-block">{stat.value}</h2>
        <div className="border-b-2 border-[#257E2C] mt-2 mb-2 w-full absolute left-0"></div>
        <p className="text-xs sm:text-sm text-[#257E2C] mt-4">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

</div>

        {/* Info Cards */}
        <div className="px-8 mt-[90px] mb-[90px] sm:px-8 lg:px-20 py-12" ref={infoCardsSectionRef}>
        <div 
          ref={infoCardsRef}
          className="flex overflow-x-auto gap-6 lg:justify-center space-x-[32px] pb-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            // On mobile/tablet, show exactly 2 cards
            maxWidth: window.innerWidth < 1024 ? 'calc(2 * 320px + 32px + 48px)' : 'none',
            margin: window.innerWidth < 1024 ? '0 auto' : '0'
          }}
        >
  {cards.map((card, idx) => (
    <div
      key={idx}
      className="rounded-3xl overflow-hidden shadow-md relative flex-shrink-0"
      style={{ width: "320px", height: "480px" }}
    >
      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
      <div
        className="absolute bottom-2.5 left-2.5 right-2.5 bg-white rounded-3xl pt-2 pb-3 px-4 text-center flex flex-col"
        style={{ height: "200px" }}
      >
        <h3 className="text-2xl font-bold text-[#257E2C] mb-1 leading-snug line-clamp-2">
          {card.title}
        </h3>
        <div className="overflow-y-auto text-sm leading-relaxed text-gray-700 flex-1">
          {card.description}
        </div>
      </div>
    </div>
  ))}
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

</div>

        {/* More About Section - Fixed for Responsiveness */}
        <div className="bg-[#D6ECC9] py-8 md:py-12">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12">
            
            {/* Title Section */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
                More About<br />
                {title}
              </h2>
            </div>

            {/* Stats Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="w-full">
                  <h2 className="text-green-700 text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {stat.value}
                  </h2>
                  <div className="border-b-2 border-green-700 w-full max-w-[200px] mb-3"></div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Variants Section - Only show if variants prop is provided */}
            {variants && variants.length > 0 && (
              <div className="mt-8 md:mt-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-6">
                  Variants
                </h2>
                <ul className="space-y-3 md:ml-12 lg:mr-16">
                  {variants.map((variant, idx) => (
                    <li key={idx} className="text-sm md:text-base text-gray-700 leading-relaxed flex items-center">
                      <span className="w-2 h-2 bg-green-700 rounded-full mr-3 flex-shrink-0"></span>
                      {variant}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>

        {/* Discover More Products - Responsive Layout */}
        <div className="px-4 sm:px-6 lg:px-[60px] py-10 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Discover More Products</h3>

          {/* Mobile & Small Screens: 2-column grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:hidden">
            {otherProducts.slice(0, 6).map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onClick={() => handleProductClick(product.link)}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm sm:text-base font-bold line-clamp-2">{product.name}</h4>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-500 flex-shrink-0">
                      <img src="/Arrow up-right.png" alt="Arrow icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={product.img}
                      alt={product.alt}
                      className="h-[120px] sm:h-[140px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Medium Screens: 4-column grid */}
          <div className="hidden md:grid md:grid-cols-4 lg:hidden gap-6">
            {otherProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onClick={() => handleProductClick(product.link)}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold line-clamp-2">{product.name}</h4>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-500 flex-shrink-0">
                      <img src="/Arrow up-right.png" alt="Arrow icon" className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={product.img}
                      alt={product.alt}
                      className="h-[180px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Screens: Horizontal Scrolling */}
          <div className="hidden lg:block">
            <div className="overflow-hidden pb-4" ref={scrollRef}>
              <div 
                className="flex gap-6 animate-scroll"
                style={{
                  width: `${(otherProducts.length * 2) * 404}px`,
                  animation: 'scroll 30s linear infinite'
                }}
              >
                {/* First set of products */}
                {otherProducts.map((product, index) => (
                  <div
                    key={`first-${index}`}
                    className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden flex-shrink-0 w-[380px] h-[450px]"
                    onClick={() => handleProductClick(product.link)}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-2xl font-bold">{product.name}</h4>
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-3 border-gray-500 rounded-ful">
                          <img src="/Arrow up-right.png" alt="Arrow icon" />
                        </div>
                      </div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={product.img}
                          alt={product.alt}
                          className="h-[260px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {otherProducts.map((product, index) => (
                  <div
                    key={`second-${index}`}
                    className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden flex-shrink-0 w-[380px] h-[450px]"
                    onClick={() => handleProductClick(product.link)}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-2xl font-bold">{product.name}</h4>
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-3 border-gray-500 rounded-ful">
                          <img src="/Arrow up-right.png" alt="Arrow icon" />
                        </div>
                      </div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={product.img}
                          alt={product.alt}
                          className="h-[260px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-${otherProducts.length * 404}px);
                }
              }
              
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>

      <BiomassAdvantages />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ProductPage;