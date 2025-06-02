import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const CoffeeNutShell = () => {
  return (
    <ProductPage
      title="Coffee Nut Shell"
      description="Coffee nut shell fuels harness the power of discarded coffee shells, transforming them into a sustainable and efficient energy source ideal for both industrial applications and residential heating. Their compact structure and impressive energy yield ensure dependable performance. By recycling materials that would typically go to waste, these coffee nut shells offer an environmentally friendly alternative to conventional fuels."
      heroImage="/Product imag.png"
      stats={[
        { value: '3800 kcal/kg', label: 'Calorific Value' },
        { value: '<5%', label: 'Ash Content' },
        { value: '<10%', label: 'Total Moisture' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },

      ]}
      cards={[
        {
            title: 'Origin',
            description: ' Collected from cashew processing industries, cashew nut shells are the outer layer removed during nut extraction. This biomass is often discarded, but it contains rich combustible properties.',
            image: '/Product image-4.png',
          },
        {
          title: 'Availability',
          description: 'Sourced from Karnataka, Kerala, and Tamil Nadu, this biomass ensures a steady supply of 1500 MT monthly. Production peaks during harvest (November–February), with stockpiles for year-round availability.',
          image: '/bb802b434e231b394d9df7f501a9b5312f8ec1f5.png',
        }
        ,
        {
          title: 'Sustainability',
          description: 'This bio-waste is rich in calorific content and burns with low emissions. It provides a sustainable way for coffee industries to reduce waste and generate renewable heat energy.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
        {
          name: 'Wood Chips',
          image: '/Container-1.png',
          link :"/wood-chips",
          
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

export default CoffeeNutShell
