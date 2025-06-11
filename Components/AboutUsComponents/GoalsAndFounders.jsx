import React from 'react';
import { Eye, Target } from 'lucide-react';
const sectionData = [
  {
    title: 'Channel Partner Units',
    items: [
      'Nellore – MSR Industries',
      'Patancheru – Shlok Bio Fuels',
      'Kamareddy – Sai Ram Agro',
      'Nandyal – Gelivi Biofuels',
      'Khammam – Planet Energy',
    ],
  },
  {
    title: 'In-House Manufacturing Clients',
    items: [
      'M/S NSL Sugars – Hyderabad',
      'EID Parry – Bagalkot',
      'Unique Biotech – Hyderabad',
    ],
  },
  {
    title: 'Consultation',
    items: [
      'Alliance Tobacco',
      'Guntur ABD',
      'Distilleries',
      'Pebbair',
      'NSL-KSL Sugars',
      'Hyderabad/Unique Biotech',
    ],
  },
];


const GoalFounderSection = () => {
  return (
    <div className="space-y-16 px-4 md:px-12 py-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
  <img
    src="/ff5c4300da61c0d19f00ec723e4df4124cefffa1.png"
    alt="Biomass factory"
    className="rounded-xl object-cover w-full h-80 md:w-[550px] md:h-[325px] md:ml-8"
  />
  <div>
    <p className="text-md text-green-700 font-bold mb-2">| Who we are</p>
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Powering Industries with Green Energy Solutions
    </h2>
    <p className="text-sm md:text-base leading-relaxed font-normal">
      We are reckoned as Biomass Briquettes Manufacturer and Supplier based in Andhra Pradesh, India.
      We manufacture the Biomass Briquettes in our “Biomass Briquetting Plant” under the strict supervision
      of the experts. It is a process to convert Agro waste, Forestry waste and Industrial waste into biomass
      Briquettes / Bio-coal. Briquettes are formed in cylindrical logs using high mechanical pressure without
      the use of chemical or binder.
    </p>
  </div>
</div>


      <div className="bg-[#D6ECC9] rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 h-auto">
  <div className="flex flex-col md:flex-row justify-between gap-10 h-full">

    {/* Vision */}
    <div className="flex items-start w-full md:w-1/2 gap-4">
      {/* Icon */}
      <div className="shrink-0">
        <img
          src="fe3c5f3c22671c308c2b2743073464902a163123(1).png" // Replace with actual path
          alt="Vision Icon"
          className="h-[100px] sm:h-[110px] md:h-[120px]"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-green-800 text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
          Our Vision
        </h3>
        <p className="font-normal text-sm sm:text-base leading-relaxed">
          Sreenee Green Pvt. Ltd. aims to transform industrial boilers in Andhra Pradesh and Telangana to 100% biomass fuels by 2030, supporting biomass manufacturing units in every mandal.
        </p>
      </div>
    </div>

    {/* Mission */}
    <div className="flex items-start w-full md:w-1/2 gap-4">
      {/* Icon */}
      <div className="shrink-0">
        <img
          src="a98756c13688a19dbfe2c168cd5cf5b175370bb3.png" // Replace with actual path
          alt="Mission Icon"
          className="h-[100px] sm:h-[110px] md:h-[120px]"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-green-800 text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
          Our Mission
        </h3>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
          To develop green and eco-friendly biomass fuels that significantly reduce carbon emissions, empowering industries to operate sustainably.
        </p>
      </div>
    </div>
  </div>
</div>
 

      {/* Our Values Section */}
     <div className="grid md:grid-cols-2 gap-8 items-center">
  {/* Text on the left */}
  <div>
    <p className="text-md text-green-700 font-semibold mb-2">| Our Value</p>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      Empowering Businesses with Sustainable Energy Innovations
    </h2>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
      At Sreenee Green Pvt. Ltd., we believe in a sustainable future powered by clean energy. Our core value lies in our commitment to innovation and environmental stewardship. We strive to provide industries in Andhra Pradesh and Telangana with high-quality biomass fuel alternatives that not only enhance operational efficiency but also significantly lower carbon emissions. By prioritizing eco-friendly solutions, we aim to lead the transition towards a greener economy, ensuring that our planet remains vibrant for generations to come.
    </p>
  </div>

  {/* Image on the right */}
  <div className="md:mr-8 md:ml-auto">
    <img
      src="/40b4cfdf402ce438b979ae6a55edeec39b748ac0.png"
      alt="Wind turbine"
      className="rounded-xl object-cover w-full h-80 md:w-[550px] md:h-[325px]"
    />
  </div>
</div>

<div className="space-y-10 px-4 md:px-10 py-6">
      <div className="flex justify-center items-center bg-white px-4">
        <div className="relative bg-white rounded-2xl border-4 border-[#D6ECC9] w-full max-w-[900px] px-8 py-6">
          {/* Top left quotation mark */}
          {/* Top left quotation mark (flipped) */}
<div className="absolute -top-8 left-4">
  <div className="w-16 h-16 flex items-center justify-center">
    <img
      src="/b25c42174d7249d9246860aff0d736921537c7cb.png"
      alt="Quote"
      className="w-10 h-10 rotate-180"
    />
  </div>
</div>

{/* Bottom right quotation mark */}
<div className="absolute -bottom-9 right-4">
  <div className="w-16 h-16 flex items-center justify-center">
    <img
      src="/b25c42174d7249d9246860aff0d736921537c7cb.png"
      alt="Quote"
      className="w-10 h-10"
    />
  </div>
</div>

          
          <div className="pt-4 pb-4">
            {/* Quote text */}
            <p className="text-[#247D2B] text-lg sm:text-xl font-bold text-center leading-relaxed mb-4">
              "Our goal is to replace coal with 100% biomass in AP & Telangana industrial boilers by 2030."
            </p>
            
            {/* Attribution */}
            <p className="text-[#9F9F9F] text-sm font-medium text-center">
              - Mr. S. S. Rao, Founder & MD
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Founder 1 */}
        <div className="bg-[#F9FFF6] rounded-2xl p-8 flex flex-col md:flex-row-reverse items-center md:items-start gap-0 md:gap-0">
          {/* Image with green background wrapper */}
          <div className="md:bg-[#D7EDC9] rounded-r-2xl p-4 rounded-bl-2xl">
            <img
              src="/f397bc81df52561114b9e0dc17bc95a6c71d092b.jpg"
              alt="Mr. S Srinivas Rao"
              className="rounded-xl w-full h-auto md:w-[462px] md:h-[516px] object-cover"
            />
          </div>
          
          <div className="w-full text-gray-800">
            <div className="md:bg-[#D7EDC9] rounded-l-xl px-4 py-2 mb-4 text-center md:text-left">
              <h3 className="text-[#77C04B] font-semibold text-base md:text-lg">
                Business Head
              </h3>
              <h3 className="text-[#257E2C] font-bold text-2xl md:text-3xl">
                Mr S Srinivas Rao
              </h3>
            </div>
            <div className="text-sm md:text-base whitespace-pre-line leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-md font-normal">
                <li><p className='text-[#1F7D1F] inline'>Business Head </p>– Agrim Biotec & Sreenee Green Energies</li>
                <li><p className='text-[#1F7D1F] inline'>Managing Partner </p>– RasiEn Eco</li>
                <li><p className='text-[#1F7D1F] inline'>Qualifications: </p>B.Tech, BOE, MBA</li>
                <li>
                  <p className='text-[#1F7D1F] inline'>Experience Summary:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 marker:text-gray-600 marker:text-sm md:marker:text-base">
                    <li>
                      Over 25 years of experience in industrial energy and boiler systems,
                      with senior-level roles in ITC-BPL, ILTD, and Thermax. Expert in biomass
                      fuel systems, O&M of thermal plants, and sustainable energy transition
                    </li>
                  </ul>
                </li>
                <li>
                  <p className='text-[#1F7D1F] inline'>Skills:</p>
                  <ul className="pl-6 mt-1 space-y-1 border-l-2 border-gray-300 ml-2">
                    <li className="pl-3">Boiler Operations</li>
                    <li className="pl-3">Biomass Fuel Strategy</li>
                    <li className="pl-3">Industrial Project Leadership</li>
                    <li className="pl-3">Clean Energy Consultation</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="bg-[#F9FFF6] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-0">
          {/* Image with green background wrapper */}
          <div className="md:bg-[#D7EDC9] rounded-l-2xl p-4 rounded-br-2xl">
            <img
              src="/905bf69052848aa8aead57b495017caf3c2e8017.jpg"
              alt="Mr. A. Samba Shiva Rao"
              className="rounded-xl w-full h-auto md:w-[462px] md:h-[516px] object-cover"
            />
          </div>

          <div className="w-full text-gray-800 md:-ml-4">
            <div className="md:bg-[#D7EDC9] rounded-r-xl px-4 py-2 mb-4 text-center md:text-left md:pl-12">
              <h3 className="text-[#77C04B] font-semibold text-base md:text-lg">
                Business Operations
              </h3>
              <h3 className="text-[#257E2C] font-bold text-2xl md:text-3xl">
              Mr. A. Samba Shiva Rao
              </h3>
            </div>
            <div className="text-sm md:text-base whitespace-pre-line leading-relaxed md:ml-4 md:pl-10">
              <ul className="list-disc pl-5 space-y-2 text-md font-normal">
                <li><p className='text-[#1F7D1F] inline'>Name</p>– A. Samba Shiva Rao</li>
                <li><p className='text-[#1F7D1F] inline'>Qualifications: </p>DME, Diploma in Mechanical Engineer</li>
                <li>
                  <p className='text-[#1F7D1F] inline'>Experience Summary:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 marker:text-gray-600 marker:text-sm md:marker:text-base">
                    <li>With years of industrial experience, Mr. A. S S Rao has Worked as a Thermax Engineer with expertise in steam boilers, ash handling systems, pollution control, and retrofitting equipment for industrial efficiency and compliance.</li>
                  </ul>
                </li>
                <li>
                  <p className='text-[#1F7D1F] inline'>Skills:</p>
                  <ul className="pl-6 mt-1 space-y-1 border-l-2 border-gray-300 ml-2">
                    <li className="pl-3">Energy Optimization</li>
                    <li className="pl-3">Operational Strategy</li>
                    <li className="pl-3">Boiler System Management</li>
                    <li className="pl-3">Industrial Fuel Transition</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



      {/* Manufacturing Network Section */}
      <div className="max-w-5xl mx-auto p-4 font-sans space-y-10">
        <div>
          <h1 className="text-2xl font-bold text-[#257E2C] mb-1">Our Manufacturing Network</h1>
          <p className="text-md font-medium">
            Spread Across Andhra Pradesh & Telangana With Strategic In-House And Partner Units.
          </p>
        </div>

        {/* Own Units */}
      {/* Own Units */}
{/* Own Units */}
{/* Own Manufacturing Units */}
<div>
  
  <div>
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Own Manufacturing Units</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        name: 'Kandukuru',
        brand: 'Agrim Biofuel Solutions',
        image: '/e49acdff03d439c4a534d2badeb30cd5a12c975f.png',
      },
      {
        name: 'Nallageria',
        brand: 'Greener Green Energies',
        image: '/76729b1d433a8c2eb4af380ca7cad89fc125611a.png',
      },
      {
        name: 'Visakhapatnam',
        brand: 'Revitit Eco',
        image: '/47845165facb9576c54a42dd2560d733235dca3b.png',
      },
    ].map((unit, idx) => (
      <div
        key={idx}
        className="relative w-full h-[333.18px] rounded-lg overflow-hidden shadow-md"
      >
        {/* Image */}
        <img
          src={unit.image}
          alt={unit.name}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Top Text */}
        <div className="absolute top-4 font-bold left-1/2 transform -translate-x-1/2 z-20 text-[#1F7D1F] text-center px-2">
          <h3 className="font-semibold text-base text-xl">{unit.name}</h3>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-4 font-bold left-0 right-0 z-20 text-white text-center px-3">
          <p className="text-dm">{unit.brand}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</div>
<div className="px-4 md:px-12 py-8 space-y-12">
  {sectionData.map((section, index) => (
    <div key={index}>
      {/* Title with background bubble */}
      <div className="relative inline-block mb-6">
        <div className="absolute -top-2 left-0 w-15 h-15 bg-[#B5E996] rounded-full -z-10"></div>
        <h2 className="text-lg md:text-xl font-bold pl-4">{section.title}</h2>
      </div>

      {/* Items aligned toward right, with spacing */}
      <div className="flex justify-end">
        <div className="space-y-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 pr-4 pt-1">
          {section.items.map((item, idx) => (
            <div key={idx} className="flex items-start justify-start font-medium text-md">
              <span className="text-[#B5E996] mr-2">
                <img src="/018815bd5a6fc26d4e5f5ac33a53d7d6433a8c54.png" alt="" className="h-5" />
              </span>
              <span>
                <p className="font-bold text-md">{item}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default GoalFounderSection;


