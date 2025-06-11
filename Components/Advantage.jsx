const advantages = [
  { id: 1, title: 'COMPLETE COMBUSTION', image: '/5e2cd70891b15f09b43b15eca43debd2423f27e3.png' },
  { id: 2, title: 'EASY FOR TRANSPORTATION', image: '/20937583fb6bd22c9ee1aac843de037bba4c9d04.png' },
  { id: 3, title: 'TAX BENIFIT', image: '/5973d93737a93d9140642f6c74c702923658fb4c.png' },
  { id: 4, title: 'LOWER EMISSION OF HARMFUL GASES', image: '/b20970379f51a0a3ff2acdae32affe05861207c4.png' },
  { id: 5, title: 'CONCENTRATED', image: '/fb06099af19fbbdd18884dab905fb310779da016.png' },
  { id: 6, title: 'COST ECONOMICAL', image: '/2c8f7ad62260c19cc91bf0d49de1b145769dd41e.png' },
  { id: 7, title: 'HIGH THERMAL VALUE', image: '/099d16d5589f546b3577f44fd5d384f362e331b0.png' },
  { id: 8, title: 'MADE FROM LEFTOVER BIOMASS WASTE', image: '/32116b124c4793792ef3e21acfbd34df25e110c2.png' },
];

export default function BiomassAdvantages() {
  return (
    <div className="px-4 md:px-20 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-black">
        ADVANTAGE OF
      </h2>
      <h3 className="text-2xl md:text-3xl font-black text-[#257E2C] border-b-4 border-[#93B61A] inline-block mb-6">
        BIOMASS PELLETS & BRIQUETTES
      </h3>
      <p className="text-[#040404] font-normal mb-10 max-w-3xl">
      Sreenee Green Biomass pellets and briquettes represent eco-friendly alternatives to fossil fuels, poised to supply a significant portion of the world's primary energy needs in the near future. These biomass biofuels not only boast a higher calorific value but also play a crucial role in fostering a cleaner, pollution-free environment. Here are several advantages of transitioning to Sreenee Green Biomass pellets and briquettes.      </p>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-6">
        {advantages.map((advantage) => (
          <div
            key={advantage.id}
            className="bg-[#E7FFDB] border border-[#77C04B] p-3 md:p-12 flex flex-col items-center text-center"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="w-8 h-8 md:w-14 md:h-14 mb-2 md:mb-4 object-contain filter brightness-0 contrast-100"
            />
            <p className="text-[10px] md:text-sm font-black">{advantage.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}