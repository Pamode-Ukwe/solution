import Footer from "./Footer"
import Homepage from "./Homepage"
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import Shop from "./Shop"

const LandingLayout = () => {
  return (
    <>
        <Navbar/>
        <Homepage/>
        <Shop/>
        <ProductList/>
        <Footer/> 
    </>
  )
}

export default LandingLayout
