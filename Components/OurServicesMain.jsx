const services = [
  {
    id: 1,
    title: 'O&M of Industrial Boilers',
    description:
      'Operation & maintenance of industrial boilers across non-comprehensive, comprehensive, and steam metering-based models — ensuring safe and efficient performance.',
    image: '/29376f23f90bc590e517b6777fd5058a5d74255d.png',
  },
  {
    id: 2,
    title: 'Consultancy Services',
    description:
      'Technical consultancy for industrial boiler setups and biomass fuel integration — tailored to optimize energy efficiency and fuel performance.',
    image: "/Service Image Container.jpg",
  },
  {
    id: 3,
    title: 'O&M of Biomass Plants',
    description:
      'Complete O&M services for biomass power and thermal plants — supporting smooth operations and sustainable energy delivery.',
    image: '/ce15cd05ee2917139f4885b90e8a49cbab21c8f1.png',
  },
];

export default function OurServices() {
  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F7D1F] mb-10 text-center">Our Services</h2>

        {/* Cards Section with horizontal scroll */}
        <div className="flex overflow-x-auto space-x-8 pb-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl flex-shrink-0 overflow-hidden"
              style={{ width: '380px', height: '480px' }}
            >
              <div className="relative rounded-4xl overflow-hidden" style={{ height: '400px', width: '100%' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full rounded-4xl"
                />
                <div
                  className="absolute inset-0 rounded-4xl pointer-events-none"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
                />
                <div className="absolute inset-0 flex items-end justify-center p-6 text-center">
                  <h3 className="text-2xl font-extrabold text-white max-w-xs mx-auto">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold pl-2 text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
