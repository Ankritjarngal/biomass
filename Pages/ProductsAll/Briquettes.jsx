import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const Briquettes = () => {
  return (
    <ProductPage
      title="Briquettes"
      description="Pellets are small, cylindrical biomass fuels made by compressing agricultural or wood residues like sawdust or bagasse into dense, uniform shapes. Known for their high combustion efficiency and low moisture content, pellets are ideal for use in heating systems, biomass boilers, and industrial furnaces. Their consistent size, easy handling, and clean-burning nature make them a sustainable and convenient green fuel alternative for various energy applications."
      heroImage="/Container.png"
      stats={[
        { value: '4000 + 10%Kcal/Kg', label: 'Gross Calorific Value' },
        { value: '<10%', label: 'Ash Content' },
        { value: '<8%', label: 'Total Moisture' },
        { value:"90 mm Diameter",label:"Briquette size" },
      ]}
      cards={[
        {
            title: 'Origin',
            description: ' Formed by compressing biomass waste like sawdust, wood chips, soya husk, and groundnut shell into solid blocks.',
            image: '/1cbd7e9dfece4b95c8467f7347d16b313891e47b.jpg',
          },
        {
          title: 'Availability',
          description: 'Sourced from agricultural and woodworking zones in Madhya Pradesh, Gujarat, and Maharashtra, our briquettes can be customized in density and size to match specific boiler and furnace requirements.',
          image: '/0b5404588d3ac89a34ce853fd963db84162a6e72.jpg',
        }
        ,
        {
          title: 'Sustainability',
          description: '  Briquettes are a low-carbon, renewable fuel that helps reduce dependence on coal. They are easy to store, transport, and burn, contributing to reduced deforestation and energy transition goals.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
        {
          name: 'Wood Chips',
          image: '/Container-1.png',
            link:"/wood-chips",
          
        },
        {
          name: 'Pallets',
          image: '/Product card.png',
            link:"/pellets",
        },
        {
          name: 'Cashew Nut Shells',
          image: '/Feature image section.png',
            link:"/cashew-nut-shell",
        },
      ]
    }
    variants={["100% Sawdust","100% Wood Chips","100% Corn Shanks","100% Bagasse","100% Groundnut Shells","80% Soya Husk/20% Sawdust","50% Sawdust/50% Wood Chips","50% Sawdust / 30% Wood Chips / 20% Groundnut Shell","50% Sawdust / 30% Wood Chips / 20% Groundnut Shell","Customized combinations"]}

    />
  )
}

export default Briquettes
