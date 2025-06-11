import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const CashewNutShell = () => {
  return (
    <ProductPage
      title="Cashew Nut Shell"
      description="Cashew Nut Shell (CNS) is a biofuel made from the outer shell of cashew nuts. It has high natural oil and carbon content, providing excellent combustion properties and a high Gross Calorific Value (GCV). CNS is commonly used in industrial boilers and furnaces for its energy output, low moisture, and consistent burn efficiency, making it an eco-friendly renewable fuel."
      heroImage="/Feature image section.png"
      stats={[
        { value: '4500-5000 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<10%', label: 'Ash Content' },
        { value: '<12%', label: 'Total Mositure' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
          title: 'Origin',
          description: 'Collected from cashew processing industries, cashew nut shells are the outer layer removed during nut extraction. This biomass is often discarded, but it contains rich combustible properties.',
          image: '/Product image 234.png',
        },
        {
          title: 'Availability',
          description: 'Cashew nut shells are available year-round with a supply capacity of 1500 MT/month. Sourced mainly from processing hubs in Kerala, Karnataka, and Tamil Nadu, their steady production ensures consistent and reliable supply.',
          image: '/Image.png',
        },
        {
          title: 'Sustainability',
          description: 'Cashew nut shells are a high-calorific waste product that helps reduce landfill and fossil fuel use. Utilizing this by-product for energy supports zero-waste production and reduces environmental harm.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
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
        {
          name: 'Woodchips',
          image: '/Container-1.png',
          link:"/wood-chips",
        },
      ]}
    />
  )
}

export default CashewNutShell
