import React from "react";

const clientLogos = [
  { src: "/17404020051724595343paharpur-logo_(1).png", alt: "Paharpur" },
  { src: "/DrR_Logo_Primary_RGB_v6.svg", alt: "Dr.reddy" },
  { src: "/GENESYS-LOGO.png", alt: "genesys" },
  { src: "GPI.png", alt: "Granules" },
  { src: "logo.png", alt: "lidus" },
  { src: "logo.svg", alt: "leunand" },
  { src: "/logo (1).png", alt: "" },
  { src: "/logo (3).png", alt: "Aliience" },
  { src: "/piramal-pharma-logo.svg", alt: "Piralmal" },
  { src: "/Virchow-logo-png.png", alt: "virchrow" },
];

const FuelClientsSection = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#77C04B] py-10 px-4 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        Fuel Supply Clients
      </h2>
      
      {/* Desktop: Single line scrolling */}
      <div className="hidden md:block relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 h-24 min-w-[180px] flex items-center justify-center mx-4 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Two lines scrolling */}
      <div className="md:hidden space-y-4">
        {/* First row */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-mobile">
            {[...clientLogos.slice(0, 5), ...clientLogos.slice(0, 5)].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-3 h-20 min-w-[140px] flex items-center justify-center mx-2 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-mobile-reverse">
            {[...clientLogos.slice(5), ...clientLogos.slice(5)].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-3 h-20 min-w-[140px] flex items-center justify-center mx-2 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-mobile-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile 20s linear infinite;
        }
        
        .animate-scroll-mobile-reverse {
          animation: scroll-mobile-reverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FuelClientsSection;