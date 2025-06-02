const HeroSection2 = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] mx-8 md:mx-24 mb-8 rounded-3xl overflow-hidden">
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
      <div className="relative z-20 flex flex-col justify-between h-full px-10 sm:px-16 md:px-32 py-8 md:py-12 text-white">
        {/* Top Text */}
        <div className="mt-4 md:mt-10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base mb-2 font-medium tracking-wide">
            More Power Efficiency
          </p>
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Creating Sustainable <br /> Energy Of Tomorrow
          </h1>
        </div>

        {/* Bottom Paragraphs - smaller and aligned to bottom */}
        {/* Bottom Paragraphs - font size ~16px and aligned bottom */}
<div className="max-w-4xl mx-auto text-white px-4 sm:px-0 flex justify-end items-end">
  <div className="text-base text-white space-y-4 text-center font-normal leading-relaxed mb-6">
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
