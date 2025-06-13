import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import { Products } from '../Pages/Products'
import CashewNutShell from '../Pages/ProductsAll/CashewNutShell'
import PaddyHusk from '../Pages/ProductsAll/RiceHusk'
import WoodChips from '../Pages/ProductsAll/WoodChips'
import PalmNutShell from '../Pages/ProductsAll/PalmNutShell'
import SawDust from '../Pages/ProductsAll/SawDust'
import Briquettes from '../Pages/ProductsAll/Briquettes'
import Pellets from '../Pages/ProductsAll/Pellets'
import CornShank from '../Pages/ProductsAll/CornShank'
import CoffeeNutShell from '../Pages/ProductsAll/CoffeeNutShell'
import BaggasseDust from '../Pages/ProductsAll/BaggasseDust'
import ContactUs from '../Pages/ContactUs'
import Sustainability from '../Pages/Sustainability'
import './index.css'; // ✅ Import Tailwind & global styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/cashew-nut-shell' element={<CashewNutShell />} />
        <Route path='/products/rice-husk' element={<PaddyHusk />} />
        <Route path='/products/wood-chips' element={<WoodChips />}></Route>
        <Route path='/products/palm-nut-shell' element={<PalmNutShell/>}></Route>
        <Route path='/products/saw-dust' element={<SawDust/>}></Route>
        <Route path='/products/briquettes' element={<Briquettes/>}></Route>
        <Route path='/products/pellets' element={<Pellets/>}></Route>
        <Route path='/products/coffee-nut-shell' element={<CoffeeNutShell/>}></Route>
        <Route path='/products/baggasse-dust' element={<BaggasseDust/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/sustainability' element={<Sustainability/>}></Route>
        <Route path='/products/corn-shank' element={<CornShank/>}></Route>
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
