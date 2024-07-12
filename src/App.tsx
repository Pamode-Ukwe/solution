import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './CartPage'
import LandingLayout from './LandingLayout'
//import Footer from './Footer'
//import Homepage from './Homepage'
//import Navbar from './Navbar'
//import ProductList from './ProductList'
//import Shop from './Shop'

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingLayout/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
/* <Navbar/>
    <Homepage/>
    <Shop/>
    <ProductList/>
    <Footer/> */
  