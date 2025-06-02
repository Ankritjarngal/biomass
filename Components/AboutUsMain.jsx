import React from 'react';

const AboutUsMain = () => {
  return (
    <section className="about-us px-4 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 mt-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-8">About Us</h2>
          <p className="md:w-1/2 text-base font-bold">
            Our Company Provides Environmentally Sustainable Solid Green Fuels And Innovative Solutions Specifically Designed For Industrial Boilers.
          </p>
        </div>

        {/* Cards Section with horizontal scroll */}
<div className="flex overflow-x-auto space-x-12 pb-4">
{[...Array(3)].map((_, index) => {
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
      title: <>Engineered for<br />Effortless Operation</>, // <-- JSX with break
      description: "Low-Density Biomass Fuels Offer Smooth Feeding And Reliable Performance With Minimal Upkeep."
    }
  ][index];

  return (
    <div
      key={index}
      className="rounded-3xl flex-shrink-0 overflow-hidden"
      style={{ width: '380px', height: '510px' }}
    >
      <div className="relative rounded-4xl overflow-hidden" style={{ height: '400px', width: '100%' }}>
        <img
          src={cardData.image}
          alt={cardData.alt}
          className="object-cover h-full w-full rounded-4xl"
        />
        <div
          className="absolute inset-0 rounded-4xl pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
        />
        <div className="absolute inset-0 flex items-end justify-center p-6 text-center">
          <h3 className="text-2xl font-extrabold text-white max-w-xs mx-auto">
            {cardData.title}
          </h3>
        </div>
      </div>
      <div className="p-2 pt-4">
        <p className="text-base font-semibold pl-4 text-gray-700">
          {cardData.description}
        </p>
      </div>
    </div>
  );
})}

</div>

      </div>
    </section>
  );
};

export default AboutUsMain;
