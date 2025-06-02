import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const Pellets = () => {
  return (
    <ProductPage
      title="Pellets"
      description="Pellets are small, cylindrical biomass fuels made by compressing agricultural or wood residues like sawdust or bagasse into dense, uniform shapes. Known for their high combustion efficiency and low moisture content, pellets are ideal for use in heating systems, biomass boilers, and industrial furnaces. Their consistent size, easy handling, and clean-burning nature make them a sustainable and convenient green fuel alternative for various energy applications."
      heroImage="/Product card.png"
      stats={[
        { value: '4000-4200 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<6%', label: 'Ash Content' },
        { value: '<8%', label: 'Total Moisture' },
        { value: '3000 MT/Month', label: 'Supply Capacity' },
        { value: '3000% Sawdust 100% Baggase ', label: 'Variants' },

      ]}
      cards={[
        {
            title: 'Origin',
            description: ' Pellets are cylindrical biomass fuel made by compressing materials like sawdust or bagasse under high pressure without binders.',
            image: '/91508c0d68777ee125e41b1aa117a0d1be761531.jpg',
          },
        {
          title: 'Availability',
          description: 'Sawdust pellets are sourced from Maharashtra and Andhra Pradesh, while bagasse pellets come from Uttar Pradesh and Maharashtra. Custom blends and diameters are available for industrial applications.',
          image: '/ea18d4cd5321022c0172966639ecd5ce46d2ef19.jpg',
        }
        ,
        {
          title: 'Sustainability',
          description: 'Pellets are a clean, efficient, and low-ash fuel source with high combustion efficiency. They repurpose agricultural and wood waste, offering consistent performance and lower emissions.',
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
          name: 'Briquettes',
          image: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png',
          link:"/briquettes",
        },
        {
          name: 'Cashew Nut Shells',
          image: '/Feature image section.png',
          link :"/cashew-nut-shell",
        },
      ]}
    />
  )
}

export default Pellets
