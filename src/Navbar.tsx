import { useEffect, useState } from "react"
import { BiCart, BiMenu, BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [widthCheck, setWidthCheck] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidthCheck(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.addEventListener('resize', handleResize)
        }
    },[])
    
  return (
    <header className="text-main-black sticky top-0 bg-white z-50">
        {/* Main content */}
        <div className="py-5 md:px-10 px-12 flex md:justify-between mt-6">
            {/* Menu */}
            {widthCheck < 770 && <button><BiMenu className="w-6 h-6 md:hidden"/></button>}
            {/* Logo */}
            <button className="text-2xl font-extrabold ml-[3%] md:ml-0">
                SOLESPHERE
            </button>
            {/* Navigation */}
            <div className="md:flex gap-20 hidden">
                <a href="" className="hover:font-semibold hover:text-discount-offer">Home</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Shop</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Products</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Contact Us</a>
            </div>
            {/* Cart */}
            <div className="flex gap-4 sm:ml-[55%] md:ml-0 ml-[35%]">
                <button><BiSearch className="w-8 h-8 outline rounded-full outline-gray-300/30 outline-2 p-1" title="search"/></button>
                <Link to='/cart' className="flex"><BiCart className="w-8 h-8 outline rounded-full outline-gray-300/30 outline-2 p-1 relative" title="cart"/>
                <p className="bg-black text-white absolute rounded-3xl px-1 ml-5 text-xs">10</p></Link>
            </div>
        </div>
        {/* Ad */}
        <div className="bg-discount-offer text-white font-thin text-sm flex justify-center p-2 mb-10">Get 10% off on buisness sign up</div>
    </header>
  )
}

export default Navbar
