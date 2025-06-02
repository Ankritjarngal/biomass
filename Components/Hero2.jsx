const HeroSection2 = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] h-auto mx-8 md:mx-24 mb-8 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/Sectionimage.png"
        alt="Background of a sustainable energy concept with biomass fuel production"
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
      <div className="relative z-20 flex flex-col justify-between min-h-[70vh] md:min-h-[80vh] h-full px-6 sm:px-10 md:px-16 lg:px-32 py-8 md:py-12 text-white">
        {/* Top Text */}
        <div className="mt-4 md:mt-10 text-center max-w-3xl mx-auto flex-shrink-0">
          <p className="text-xs sm:text-sm md:text-base mb-2 font-medium tracking-wide">
            More Power Efficiency
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Creating Sustainable <br /> Energy Of Tomorrow
          </h1>
        </div>
        
        {/* Bottom Paragraphs - smaller and aligned to bottom */}
        <div className="max-w-4xl mx-auto text-white px-2 sm:px-4 md:px-0 flex justify-center items-end flex-grow">
          <div className="text-sm sm:text-base md:text-base text-white space-y-3 md:space-y-4 text-center font-normal leading-relaxed mb-4 md:mb-6">
            <p>
              Sreenee Green Pvt Ltd is one of India's emerging leaders in sustainable energy solutions, committed to transforming agricultural waste into clean, green biomass fuels. We specialize in the production of briquettes, pellets, woodchips, and other allied biomass fuels that serve as eco-friendly alternatives to fossil fuels.
            </p>
            <p>
              Our mission is to significantly reduce greenhouse gas (GHG) emissions and promote a circular economy by recycling biomass waste into high-efficiency fuels. With a focus on innovation and environmental responsibility, our long-term goal is to support industries across India in transitioning to greener energy sources — paving the way for a cleaner, carbon-conscious future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;