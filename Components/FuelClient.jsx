import React from "react";

const clientLogos = [
  { src: "d9cce4f5760dac6393cd04983f144601ada97007.png", alt: "Tops" },
  { src: "92fc3350d2e08d0af2f4162728fddfbe1233b01d.png", alt: "Haldiram's" },
  { src: "5e0b2f1195dab9cf77a766dde3c5ac5f69c230b1.png", alt: "Om Sweets & Snacks" },
  { src: "4a6e7f55bc753acae0b15d0178f45a8149e147b0(1).png", alt: "Dabur" },
  { src: "2c16fcff5742a1822a1ba3267fc224f1e8bf5bfa.png", alt: "Dabur" },
];

const FuelClientsSection = () => {
  return (
    <section className="bg-[#77C04B] py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        Fuel Supply Clients
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-3 sm:p-4 w-full h-20 sm:h-24 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FuelClientsSection;