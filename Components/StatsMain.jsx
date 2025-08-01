import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "12+", label: "Year Experience" },
    { value: "30+", label: "Cities Served" },
    { value: "1,500+", label: "Clients" },
    { value: "160,000+", label: "Tonnage" },
  ];

  return (
    <div className="bg-[#77C04B] rounded-lg py-8 px-6 mx-8 my-10 md:mx-auto md:max-w-4xl">
      <div className="flex flex-col md:flex-row justify-around items-center text-center md:space-x-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full md:w-auto relative"
          >
            <div className="px-4">
              <p className="text-white text-3xl font-bold">{stat.value}</p>
              <p className="text-white text-s">{stat.label}</p>
            </div>

            {/* Divider - show only on md+ and if not last item */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-10 border-r border-white absolute right-0 top-1/2 transform -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
