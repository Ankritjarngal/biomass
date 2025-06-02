import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'

const WoodChips = () => {
  return (
    <ProductPage
      title="WoodChips"
      description="Crafted from shredded wood, woodchips serve as a sustainable and efficient energy source ideal for both industrial applications and home heating. Their compact structure and impressive energy yield ensure dependable performance. By utilizing materials that would typically go to waste, these woodchips offer an environmentally friendly substitute for conventional fuels."
      heroImage="/Container-1.png"
      stats={[
        { value: '3600-4000 kcal/kg', label: 'Calorific Value' },
        { value: '<5%', label: 'Ash Content' },
        { value: '<30%', label: 'Total Moisture' },
        { value: '9000 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
          title: 'Origin',
          description: 'Chipped from trees such as Subabul, Julia Flora, and Malabar Neem, these are fast-growing, sustainable timber sources.',
          image: '/c9eae3470910fe35fc5a215d787ebf9785846ebb.jpg',

        },
        {
          title: 'Availability',
          description: 'Harvested from Subabul, Julia Flora, and Malabar Neem grown on energy plantations in Andhra Pradesh, Karnataka, and Telangana. Sustainably cultivated on unused lands to prevent deforestation and support soil health.',
          image: '/ca2892522c997827ce4cdfad6d2710b28c2e84c4.png',
        },
        {
          title: 'Sustainability',
          description: 'Wood chips are used in biomass boilers and gasifiers, making them ideal for thermal power plants. They are a renewable source that decomposes naturally if unused, causing no ecological damage.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
        {
          name: 'Briquettes',
          image: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png',
          link :"/briquettes",
          
        },
        {
          name: 'Pallets',
          image: '/Product card.png',
          link :"/pellets",
        },
        {
          name: 'Cofee Nut Shell',
          image: '/Product imag.png',
          link :"/coffee-nut-shell",
        },
      ]}
    />
  )
}

export default WoodChips
