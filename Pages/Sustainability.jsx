import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

export default function Sustainability() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative">
        <img
          src="badaa488fb990404e0ff130e4f5a605cd176fb74.jpg"
          alt="Header"
          className="w-full h-[250px] md:h-[450px] object-cover"
        />
        <h2 className="absolute left-4 md:left-6 bottom-4 md:bottom-6 text-[52px] md:text-5xl font-bold text-white">
          Sustainability
        </h2>
      </div>

      <SustainabilitySection />
      <EnvironmentalImpact />
      <PelletBenefits />
      <SustainabilityStats />
      <ResponsibilitySection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export function SustainabilitySection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 py-12 gap-12 bg-white">
      <div className="relative rounded-xl overflow-hidden shadow-lg w-full md:w-1/2 max-w-[480px] mx-auto md:mx-0">
        <img
          src="image copy 2.png"
          alt="Pollution"
          className="w-full h-auto  object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-[#2C6E49] text-2xl md:text-4xl font-bold mb-4">
          Why Sustainability Matters
        </h2>
        <p className="font-medium mb-6 max-w-lg mx-auto md:mx-0">
          Industries need alternatives to fossil fuels to cut emissions, reduce costs, and ensure long-term energy security. Biomass fuels provide a scalable, eco-friendly solution.
        </p>

        <div className="space-y-6 max-w-lg mx-auto md:mx-0">
  {[
    {
      title: "Industrial Responsibility",
      image: "/5f892c20b0fcf8bb60924fd2fbcb2b0ca9ecddbe.png",
    },
    {
      title: "Energy Transition",
      image: "/8129894786666af909c8202230159e4297dca530.png",
    },
    {
      title: "Biomass Solution",
      image: "/b62e7b5aa16bcd5589e696c2ea623dcdd8bd00b5.png",
    },
  ].map((item, idx) => (
    <div className="flex items-start gap-6" key={idx}>
      <div className="w-9 h-9 rounded-full bg-[#D9D9D9] mt-1 shrink-0 flex items-center justify-center">
        <img src={item.image} alt={item.title} className="w-5 h-5 object-contain" />
      </div>
      <div>
        <h4 className="font-bold text-xl">{item.title}</h4>
        <p className="text-sm text-gray-600">
          {item.title === "Industrial Responsibility"
            ? "Modern industries are facing pressure to reduce carbon emissions while maintaining production efficiency."
            : item.title === "Energy Transition"
            ? "Clean fuel alternatives are essential for a sustainable future and regulatory compliance."
            : "Our biomass fuels offer a perfect balance of environmental responsibility and industrial performance."}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

function EnvironmentalImpact() {
  const impactData = [
    {
      image:"/ea1bf12010a03d6d6e2f79b8e88b9204abab657e.png",
      value: "4-5x",
      title: "Lower Carbon Emissions",
      description: "Our biomass fuels produce significantly less carbon than traditional coal.",
    },
    {
      image:"/ea3bfefb2bce7b7949cd079e7bbce1c9c7d64ef1.png",
      value: "50%",
      title: "Cost Savings",
      description: "Switch to biomass and realize significant cost advantages over time.",
    },
    {
      image:"/84ca17b65b08d59bea287baed4c27a1b00477043.png",
      value: "0%",
      title: "Zero Sulfur, Zero Pollution",
      description: "Cleaner burning with no harmful sulfur emissions or particulates.",
    },
    {
      image:"/3050744932824de45fa338f50e5e3a74fca3197b.png",
      value: "500+",
      title: "Supports Rural Economies",
      description: "Creating jobs and sustainable livelihoods in agricultural communities.",
    },
  ];

  return (
    <div className="bg-[#f7f2e9] py-16 px-4 sm:px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#2C6E49] mb-4">
        Environmental Impact
      </h2>
      <p className="max-w-2xl mx-auto font-medium mb-10">
        Our biomass solutions deliver measurable benefits for both your business and the environment.
      </p>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
  {impactData.map((item, index) => (
    <div
      key={index}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center flex flex-col items-center justify-start min-h-[400px]"
    >
      <div className="mt-4 mb-6 w-16 h-16 flex items-center justify-center rounded-3xl bg-[#2C6E49]">
        <img src={item.image} alt="" className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-[#2C6E49] text-2xl font-bold mb-2">{item.value}</h3>
      <h4 className="text-black font-bold text-2xl mb-2">{item.title}</h4>
      <p className="text-md font-medium">{item.description}</p>
    </div>
  ))}
</div>

    </div>
  );
}
const benefits = [
  "Direct substitute for coal/wood in industrial boilers and kilns.",
  "Renewable, eco-friendly, non-polluting energy source.",
  "Smokeless combustion, low ignition temperature.",
  "Leaves only white ash (2–5% ash vs. 30–49% in coal).",
  "No binders; natural lignin acts as binder.",
  "Fully efficient heat utilization.",
  "High-density fuel (1000 kg/m³ vs. 50 kg agro-waste).",
  "No toxic gases, sulfur, or odor.",
  "Suitable for gasifiers and engines.",
  "Can replace charcoal, reducing deforestation.",
  "Supports clean startup in large furnaces.",
  "Protects the environment from pollution.",
];

function PelletBenefits() {

  return (
    <div className="bg-white py-16 px-4 sm:px-6 md:px-20">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-40">
      {/* Image on left */}
      <div className="w-full lg:w-1/2 max-w-[560px] mx-auto lg:mx-3">
        <img
          src="e6bb3ac888420ef9a7265f73130f77f621df5eda.png"
          alt="Benefits of Biomass Pellets"
          className="w-full h-auto object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Heading and bullet points on right */}
      <div className="w-full lg:w-1/2 space-y-4 text-gray-700 text-base text-center lg:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#77C04B]">
          Benefits Of Biomass Pellets
        </h2>
        <ul className="list-disc pl-5 space-y-2 marker:font-medium max-w-lg mx-auto lg:mx-0">
          {benefits.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}

function SustainabilityStats() {
  return (
    <div className="bg-[#2C6E49] py-16 px-4 sm:px-6 md:px-20 text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">Sustainability In Numbers</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        {["5,000+", "30+", "5,000"].map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl font-black">{stat}</p>
            <p className="mt-2 text-lg font-medium">
              {index === 0
                ? "MT/Month Biomass Fuel Supplied"
                : index === 1
                ? "Industrial Clients Served"
                : "MT CO₂ Saved Annually"}
            </p>
          </div>
        ))}
      </div>
      <p className="text-base md:text-lg max-w-4xl mx-auto font-medium">
        Our Impact Grows Every Day As More Industries Make The Sustainable Switch To Biomass Fuel.
        Join Us In Creating A Cleaner Future.
      </p>
    </div>
  );
}
function ResponsibilitySection() {
  return (
    <section className="bg-white py-16 pl-4 pr-0 sm:pl-6 sm:pr-0 md:pl-20 md:pr-0">
        <div className="flex justify-center items-center bg-white px-4">
        <div className="relative bg-white rounded-2xl border-4 border-[#D6ECC9] w-full max-w-[900px] px-8 py-6">
          {/* Top left quotation mark */}
          {/* Top left quotation mark (flipped) */}
<div className="absolute -top-8 left-4">
  <div className="w-16 h-16 flex items-center justify-center">
    <img
      src="/b25c42174d7249d9246860aff0d736921537c7cb.png"
      alt="Quote"
      className="w-15 h-15 rotate-180"
    />
  </div>
</div>

{/* Bottom right quotation mark */}
<div className="absolute -bottom-9 right-4">
  <div className="w-16 h-16 flex items-center justify-center">
    <img
      src="/b25c42174d7249d9246860aff0d736921537c7cb.png"
      alt="Quote"
      className="w-15 h-15"
    />
  </div>
</div>

          
          <div className="pt-4 pb-4">
            {/* Quote text */}
            <p className="text-[#247D2B] text-lg sm:text-xl font-bold text-center leading-relaxed mb-4">
            “Our present goal is to reduce 1 lakh metric tons of CO₂ emissions annually through sustainable biomass energy solutions.” 
            </p>
            
            {/* Attribution */}
            <p className="text-[#9F9F9F] text-sm font-medium text-center">
              - Mr. S. S. Rao, Founder & MD
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text on left */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-md font-bold text-[#5E5E5E] uppercase mb-2 mt-6">Revolutionizing</p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            A Responsibility For Today And A Better <br />
            <span className="text-[#257E2C]">Tomorrow</span>
          </h2>
          <p className="text-[#333333] font-medium text-base md:text-lg max-w-lg mx-auto md:mx-0">
            At Sreenee Green Energies, we believe that every fuel choice we make today
            carries a responsibility toward the future. Our commitment to developing clean,
            reliable biomass fuels is not just about serving industries today—it's about
            creating a world where progress and sustainability go hand in hand. By offering
            eco-friendly alternatives that reduce emissions and protect natural resources,
            we are helping industries thrive while ensuring a greener, healthier planet for
            generations to come.
          </p>
        </div>

        {/* Image flush to right edge */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="35ea19b9baa073ea0f58a9f36d8edaea5e390c22.jpg"
            alt="Sustainability Globe"
            className="w-full max-w-[700px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
