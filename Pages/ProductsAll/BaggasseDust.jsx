import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const BaggasseDust = () => {
  return (
    <ProductPage
      title="Bagasse Dust"
      description="Sawdust is a fine, powdery residue generated from cutting, grinding, or sanding wood. It is a versatile biomass material commonly used as fuel in its raw form or processed into briquettes and pellets. With decent calorific value and easy availability, sawdust is an eco-friendly energy source ideal for combustion in industrial and domestic settings. Its lightweight, dry texture ensures quick ignition and consistent burning."
      heroImage="/Container-2.png"
      stats={[
        { value: '3800 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<5%', label: 'Ash Content' },
        { value: '<20%', label: 'Total Moisture' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },

      ]}
      cards={[
        {
            title: 'Origin',
            description: 'Bagasse is the fibrous residue left after extracting juice from sugarcane. Its used as biofuel and in making paper and building materials',
            image: '/572b8055a808aa1de2407c281f08ccadf56cf76b.png',
          },
        {
          title: 'Availability',
          description: 'Sourced from sugar mills in Uttar Pradesh, Maharashtra, and Karnataka, this biomass has a monthly supply capacity of 1500 MT, peaking during the crushing season.',
          image: '/3e71a307904269b6eb505f246eac8568250b24a0.jpg',
        }
        ,
        {
          title: 'Sustainability',
          description: 'Bagasse dust is a clean-burning, renewable fuel that supports cogeneration in sugar factories. It reduces agricultural waste and provides a stable energy resource for rural and industrial applications.',
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
          name: 'Pellets',
          image: '/Product card.png',
          link:"/pellets",
        },
      ]}
    />
  )
}

export default BaggasseDust
