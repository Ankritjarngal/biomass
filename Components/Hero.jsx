import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="Untitled design(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl px-4 w-full">
        <div className="text-center lg:text-left lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A World Running On Fossil Fuels: A Growing Cost To Our Planet
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-6">
            The time for change is now. Pollution, climate change, and resource depletion demand cleaner, renewable
            alternatives like biomass pellets. Discover why switching from traditional fuels to sustainable solutions is
            critical for industries and communities.
          </p>

          {/* Slanted "Explore Products" Button - Fixed Version */}
          <Link
            to="/products"
            className="inline-flex items-stretch overflow-hidden rounded-md text-[13px] font-medium border-2 border-[#7DC242] group transition-all duration-300 hover:shadow-lg hover:scale-105 relative bg-white"
          >
            {/* Icon Section with slanted right edge */}
            <div
              className="bg-white px-3 py-2 flex items-center justify-center relative z-10 group-hover:bg-gray-50 transition-colors duration-300"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)",
              }}
            >
              <CircleChevronRight className="text-[#7DC242] text-[16px] z-10 relative group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Text Section with slanted left edge - overlapping slightly */}
            <div
              className="bg-[#7DC242] px-4 py-2 flex items-center justify-center relative z-20 group-hover:bg-[#5cae2d] transition-colors duration-300 -ml-px"
              style={{
                clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <span className="text-white z-10 relative group-hover:translate-x-1 transition-transform duration-300">
                Explore Products
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}