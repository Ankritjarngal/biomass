import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const products = [
  {
    id: '01',
    title: 'Briquettes',
    description:
      'Made from compressed biomass, briquettes are a sustainable and efficient energy solution suitable for both industrial and home use. Their dense form and high energy output guarantee reliable performance. By repurposing materials that might otherwise be discarded, these briquettes provide an eco-friendly alternative to traditional fuels.',
    image: '/1aa65795ba6b5e17e100e80968995517748d9625.png',
    link: "/products/briquettes",
  },
  {
    id: '02',
    title: 'Woodchips',
    description:
      'Crafted from shredded wood, woodchips serve as a sustainable and efficient energy source ideal for both industrial applications and home heating. Their compact structure and impressive energy yield ensure dependable performance. By utilizing materials that would typically go to waste, these woodchips offer an environmentally friendly substitute for conventional fuels.',
    image: '/4884d5c098916495ac1ae163edbf532f790a6672.png',
    link: "/products/wood-chips",
  },
  {
    id: '03',
    title: 'Pellets',
    description:
      'Crafted from compressed biomass, pellets serve as a sustainable and efficient energy source ideal for both industrial and residential applications. Their compact structure and high energy yield ensure dependable performance. By utilizing materials that would otherwise go to waste, these pellets offer an environmentally friendly alternative to conventional fuels.',
    image: '/flipped_image_transparent.png',
    link: "/products/pellets",
  },
  {
    id: '04',
    title: 'Coffee Nut Shell',
    description:
      'Coffee nut shell fuels harness the power of discarded coffee shells, transforming them into a sustainable and efficient energy source ideal for both industrial applications and residential heating. Their compact structure and impressive energy yield ensure dependable performance. By recycling materials that would typically go to waste, these coffee nut shells offer an environmentally friendly alternative to conventional fuels.',
    image: '/Product imag.png',
    link: "/products/coffee-nut-shell",
  },
];

const OurProducts = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      {/* Top Section Aligned Left */}
      <div className="mb-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F7D1F]">Our Products</h2>
        <p className="font-bold mt-2">We Offer Better Products For You</p>
        <p className="mt-2 text-sm md:text-base font-medium">
          Empowering industries with reliable and cost-effective energy solutions, our biomass products are tailored to meet
          diverse operational needs. From fuel pellets to briquettes, each product is engineered to deliver performance and
          efficiency. Choose solutions that drive results while supporting sustainable practices.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
          key={product.id}
          className="bg-[#FFFCFC] shadow-lg rounded-xl p-4 md:p-6 relative flex flex-col justify-between h-full"
        >
          <div className="absolute top-4 right-4 text-[#E0E0E0] text-5xl font-black opacity-60">{product.id}</div>
          <div>
            <h3 className="text-xl font-black mb-2">{product.title}</h3>
            <p className="text-sm mb-4 line-clamp-5 font-medium">
              {product.description}
            </p>
            <Link
              to={product.link}
              className="text-[#77C04B] font-extrabold text-[1.125rem] cursor-pointer"
            >
              VIEW MORE
            </Link>
          </div>
        
          {/* ✅ Push image right and edge-aligned */}
          <div className="mt-4 flex justify-end">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 object-contain"
            />
          </div>
        </div>
        
          
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
