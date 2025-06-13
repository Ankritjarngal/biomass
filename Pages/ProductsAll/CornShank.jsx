import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const CornShank = () => {
  return (
    <ProductPage
      title="Corn Shank"
      description="Corn shank, the fibrous stalk portion left behind after corn harvesting, is an abundant agricultural residue that has proven to be an efficient biomass fuel. Its composition is rich in cellulose and lignin, which contributes to moderate calorific value and stable combustion properties. With low ash content and manageable moisture levels, corn shank is a clean-burning alternative for industrial thermal applications."
      heroImage="/18f263de892170a89353d314f18c11d80d05a6eb.png"
      stats={[
        { value: '4000 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<5%', label: 'Ash Content' },
        { value: '<12%', label: 'Total Moisture' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
            title: 'Origin',
            description: 'Corn shanks are the fibrous remnants of maize stalks left after harvesting cobs. They are collected during post harvest processing in corn-producing regions.',
            image: '/f0b80b78f5032c7d554f27b27efc3a087bcecab9.jpg',
          },
        {
          title: 'Availability',
          description: 'Sourced from corn farming regions in Madhya Pradesh, Maharashtra, and parts of Telangana. Supply is seasonal but maintained year-round through stockpiling and supplier networks.',
          image: '/8abe97abc36afa774a38b856389393e21c45ada7.png',
        }
        ,
        {
          title: 'Sustainability',
          description: 'Corn shank usage supports circular agriculture by converting waste into energy. It reduces fossil fuel dependence and promotes zero-waste farming.',
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

export default CornShank
