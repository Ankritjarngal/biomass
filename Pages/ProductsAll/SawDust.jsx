import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'

const SawDust = () => {
  return (
    <ProductPage
      title="Saw Dust"
      description="Sawdust is a fine, powdery residue generated from cutting, grinding, or sanding wood. It is a versatile biomass material commonly used as fuel in its raw form or processed into briquettes and pellets. With decent calorific value and easy availability, sawdust is an eco-friendly energy source ideal for combustion in industrial and domestic settings. Its lightweight, dry texture ensures quick ignition and consistent burning."
      heroImage="/Saw dust image new.png"
      stats={[
        { value: '3800-4200 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<5%', label: 'Ash Content' },
        { value: '<15%', label: 'Total Moisture' },
        { value: '1500 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
            title: 'Origin',
            description: ' Generated during wood cutting and milling, sawdust is a fine wood particle commonly found in sawmills and carpentry units.',
            image: '/b187f6208e69adb1406e825af1d8eb7e0e92a784.jpg',
          },
        {
          title: 'Availability',
          description: 'Consistently available year-round from sawmills and timber industries in Maharashtra, Gujarat, and Andhra Pradesh, supported by ongoing woodworking and furniture production.',
          image: '/Image-7.png',
        }
        ,
        {
          title: 'Sustainability',
          description: ' Instead of letting sawdust contribute to landfill or air pollution through open burning, it is repurposed into biomass fuels. It reduces dependency on wood logs and fossil fuels, aiding forest conservation.',
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
          name: 'Briquettes',
          image: '/98e0bf8b36bd0b017064af2d02ebcc606a74a967(1).png',
          link :"/briquettes",
        },
      ]}
    />
  )
}

export default SawDust
