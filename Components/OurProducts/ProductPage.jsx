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
}) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // All available products
  const allProducts = [
    { name: 'Briquettes', img: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png', alt: 'Briquettes', link: '/briquettes' },
    { name: 'Pellets', img: '/Product card.png', alt: 'Pellets', link: '/pellets' },
    { name: 'Woodchips', img: '/Container-1.png', alt: 'Woodchips', link: '/wood-chips' },
    { name: 'Palm Nut Shell', img: '/Product card-2.png', alt: 'Palm Nut Shell', link: '/palm-nut-shell' },
    { name: 'Rice Husk', img: '/Product card-1.png', alt: 'Rice Husk', link: '/rice-husk' },
    { name: 'Bagasse Dust', img: '/Container-2.png', alt: 'Bagasse Dust', link: '/baggasse-dust' },
    { name: 'Saw Dust', img: '/Product image-1.png', alt: 'Saw Dust', link: '/saw-dust' },
    { name: 'Coffee Nut Shell', img: '/Product imag.png', alt: 'Coffee Nut Shell', link: '/coffee-nut-shell' },
    { name: 'Cashew Nut Shell', img: '/Feature image section.png', alt: 'Cashew Nut Shell', link: '/cashew-nut-shell' },
  ];

  // Filter out the current product based on title
  const otherProducts = allProducts.filter(product => 
    product.name.toLowerCase() !== title.toLowerCase()
  );
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
    <h1 className="text-6xl font-black text-[#257E2C]">{title}</h1>
    <p className="mt-4 text-lg leading-relaxed">{description}</p>
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
        <h2 className="text-[#257E2C] text-2xl md:text-3xl font-bold inline-block">{stat.value}</h2>
        <div className="border-b-2 border-[#257E2C] mt-2 mb-2 w-full absolute left-0"></div>
        <p className="text-sm text-[#257E2C] mt-4">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

</div>

        {/* Info Cards */}
        <div className="overflow-x-auto px-8 mt-[90px] mb-[90px] sm:px-8 lg:px-20 py-12">
        <div className="flex gap-6 min-w-max lg:justify-center space-x-[32px]">
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

</div>

        <div className="bg-[#D6ECC9] h-[382px] flex items-center">
  <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-start w-full">
    
    {/* Left Title Section */}
    <div className="w-full md:w-1/5 flex flex-col justify-start items-start">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug">
        More About<br />
        {title}
      </h2>
    </div>

    {/* Stats Section */}
    <div className="w-full md:w-4/5 grid grid-cols-2 gap-y-8 gap-x-6 justify-end text-left lg:pr-6 xl:pr-8">
      {stats.map((stat, idx) => (
        <div key={idx}>
          <h2 className="text-green-700 text-xl md:text-2xl font-bold">{stat.value}</h2>
          <div className="border-b-2 border-green-700 mt-2 mb-2 w-64"></div> {/* shorter border */}
          <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
    
  </div>
</div>



        {/* Discover More Products - Horizontal Scrolling */}
        <div className="px-6 py-10 max-w-10xl ml-[60px] mr-[60px] rounded-2xl">
          <h3 className="text-3xl font-bold mb-6">Discover More Products</h3>

          {/* Horizontal Scrolling Container */}
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

      <BiomassAdvantages />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ProductPage;