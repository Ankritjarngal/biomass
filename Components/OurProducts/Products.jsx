import { ArrowUpRightFromCircle } from 'lucide-react';

const products = [
  { name: 'Briquettes', img: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png', alt: 'Briquettes', link: '/products/briquettes' },
  { name: 'Pellets', img: '/Product card.png', alt: 'Pellets', link: '/products/pellets' },
  { name: 'Woodchips', img: '/Container-1.png', alt: 'Woodchips', link: '/products/wood-chips' },
  { name: 'Palm Nut Shell', img: '/Product card-2.png', alt: 'Palm Nut Shell', link: '/products/palm-nut-shell' },
  { name: 'Rice Husk', img: '/Product card-1.png', alt: 'Rice Husk', link: '/products/rice-husk' },
  { name: 'Bagasse Dust', img: '/Container-2.png', alt: 'Bagasse Dust', link: '/products/baggasse-dust' },
  { name: 'Saw Dust', img: '/Product image-1.png', alt: 'Saw Dust', link: '/products/saw-dust' },
  { name: 'Coffee Nut Shell', img: '/Product imag.png', alt: 'Coffee Nut Shell', link: '/products/coffee-nut-shell' },
  { name: 'Cashew Nut Shell', img: '/Feature image section.png', alt: 'Cashew Nut Shell', link: '/products/cashew-nut-shell' },
];

const BiomassProducts = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[450px] mb-10">
        <img
          src="/5b8c763f58795d35e15e75916700c45f6285c56a.jpg"
          alt="Header"
          className="absolute inset-0 w-full h-full object-cover z-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="absolute left-6 bottom-6 text-[52px] font-bold text-white z-30">Our Products</h2>
      </div>

      {/* Biomass Fuel Description */}
      <div className="bg-white px-6 py-10 max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-start gap-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Our Biomass Fuel Products</h3>
          </div>
          <div className="md:w-2/3 text-gray-700 text-base font-semibold leading-relaxed">
            <p>
              Our Company Provides An Extensive Selection Of High-Efficiency, Eco-Friendly Biomass Fuels Specifically Designed To Meet The Diverse Needs Of Various Industries While Aligning With Their Environmental Sustainability Goals. We Focus On Sourcing Renewable Materials And Optimizing Production Processes To Ensure That Our Fuels Not Only Reduce Carbon Footprints But Also Enhance Energy Efficiency Across Different Applications.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto rounded-2xl">
        <h3 className="text-3xl font-bold mb-6">Our Products</h3>

        {/* Mobile View */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden flex-shrink-0 w-[380px] h-[450px]"
                onClick={() => {
                  window.location.href = product.link;
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
{/* Hover overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold">{product.name}</h4>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-3 border-gray-500 rounded-ful">
                      <img src="/Arrow up-right.png" alt="" />
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

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden w-[380px] h-[450px]"
              onClick={() => {
                window.location.href = product.link;
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_#F2F2F2_0%,_rgba(242,242,242,0.1)_100%)] rounded-2xl"></div>
{/* Hover overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#D9F3BA]/50 via-[#E8F7D6]/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold">{product.name}</h4>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-3 border-gray-500 rounded-ful">
                  <img src="/Arrow up-right.png" alt="" />
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

      <section className="relative h-[70vh] md:h-[80vh] mx-8 md:mx-24 mb-8 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/758b4309e365dc3289c86487788622da74bb4d7c.jpg"
        alt="Green Future"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full px-10 sm:px-16 md:px-32 py-8 md:py-12 text-white">
        {/* Top Text */}
        <div className="mt-4 md:mt-10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base mb-2 font-medium tracking-wide">
            More Power Efficiency
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering A Greener <br /> Future Through Innovation
          </h1>
        </div>

        {/* Bottom Paragraphs */}
        <div className="max-w-4xl mx-auto mb-4 md:mb-10 text-base sm:text-lg md:text-xl text-white space-y-4 text-center font-normal leading-relaxed px-4 sm:px-0">
          <p>
            Sreenee Green Pvt Ltd is a leader in sustainable energy solutions in India, transforming agricultural
            waste into clean biomass fuels like briquettes and pellets.
          </p>
          <p>
            Our mission is to reduce greenhouse gas emissions and promote a circular economy by recycling biomass
            waste into efficient fuel — helping industries transition to greener energy sources for a cleaner future.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
};

export default BiomassProducts;
