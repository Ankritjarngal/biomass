import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const PalmNutShell = () => {
  return (
    <ProductPage
      title="Palm Nut Shell"
      description="Rice Husk is the protective covering of rice grains separated during milling. It is a widely used agricultural by-product as biomass fuel. With moderate calorific value and low moisture, it serves as an efficient energy source for rural industries. Its availability and renewable nature make it an eco-friendly substitute for conventional fuels."
      heroImage="/Product card-2.png"
      stats={[
        { value: '4500 kcal/kg', label: 'Calorific Value' },
        { value: '<8%', label: 'Ash Content' },
        { value: '<10%', label: 'Total Moisture' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
            title: 'Origin',
            description: ' Sourced from the palm oil industry, these hard shells are separated during palm fruit processing.',
            image: '/39f039e6c2a54a045092eacc436990650e7a29e2.jpg',
          },
        {
          title: 'Availability',
          description: 'Sourced from palm oil mills in Tamil Nadu and Kerala. Availability depends on processing cycles but ensured through reliable sourcing channels.',
          image: '/2a84318eb979f3dcdf52e8f7991185ef604fe90c.png',
        }
        ,
        {
          title: 'Sustainability',
          description: 'Palm nut shells offer high calorific value and are ideal for industrial energy generation. They help manage palm waste responsibly and promote renewable energy systems.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
        {
          name: 'Rice Husk',
          image: '/Product card-1.png',
          link :"/rice-husk",
          
        },
        {
          name: 'Bagasse Dust',
          image: '/Container-2.png',
          link:"/baggasse-dust",
        },
        {
          name: 'Briquettes',
          image: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png',
          link:"/briquettes",
        },
      ]}
    />
  )
}

export default PalmNutShell
