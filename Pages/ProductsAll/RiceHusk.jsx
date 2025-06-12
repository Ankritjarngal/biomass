import React from 'react'
import ProductPage from '../../Components/OurProducts/ProductPage'
import BiomassAdvantage from '../../Components/Advantage'

const PaddyHusk = () => {
  return (
    <ProductPage
      title="Paddy Husk"
      description="Paddy Husk is the hard protective covering of rice grains that is separated during milling. It is a readily available agricultural by-product widely used as a biomass fuel. With moderate calorific value and low moisture content, rice husk serves as an efficient and economical energy source for rural and semi-urban industries. Its abundant availability and renewable nature make it an eco-friendly substitute for conventional fuels in boilers and gasifiers."
      heroImage="/Product card-1.png"
      stats={[
        { value: '3200-3600 kcal/kg', label: 'Gross Calorific Value' },
        { value: '<18%', label: 'Ash Content' },
        { value: '<12%', label: 'Total Moisture' },
        { value: '3000 MT/Month', label: 'Supply Capacity' },
      ]}
      cards={[
        {
          title: 'Origin',
          description: 'CollectedA by-product of rice milling, rice husk is the outer covering separated from rice grains. It is readily available in all rice-producing regions.',
          image: '/0324dda61996e17c2f37e1722407a2b9aa1e8317.jpg',
        },
        {
          title: 'Availability',
          description: 'Supply Capacity: 3000 MT/Month. Sourced from rice mills in Andhra Pradesh, Telangana, Chhattisgarh, and West Bengal. Peak availability is October–March, with year-round supply through storage.',
          image: '/419e5aef81e51382b33c0e5ac3a0edfc7d7b4f45.jpg',
        },
        {
          title: 'Sustainability',
          description: 'Rice husk is an abundant, renewable agricultural waste that burns clean and is suitable for rural biomass boilers. It minimizes air pollution and supports sustainable farming practice.',
          image: '/13b032e8a38ab575723fda9d81594d7fffa811a0.jpg',
        },
      ]}
      discoverProducts={[
        {
          name: 'Cashew Nut Shell',
          image: '/Feature image section.png',
          link :"/cashew-nut-shell",
        },
        {
          name: 'Saw Dust',
          image: '/Product image-1.png',
          link:"/saw-dust",
        },
        {
          name: 'Cofee Nut Shell',
          image: '/Product imag.png',
          link:"/coffee-nut-shell",
        },
      ]}
    />
  )
}

export default PaddyHusk
