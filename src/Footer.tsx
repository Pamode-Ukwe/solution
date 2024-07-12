import { useEffect, useState } from 'react'
import icons from './assets/social icon.png'

const Footer = () => {
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
    <section className="mt-16 bg-main-black text-white w-auto">
        <div>
            <div className='container mx-auto'>
            {/* Top */}
                <div className="md:flex md:justify-between justify-center px-16 pt-16 pb-8">
                    {/* Logo */}
                    <div className="md:flex gap-4 md:justify-evenly items-center text-center md:text-wrap">
                        <p className="text-2xl font-extrabold">SOLESPHERE</p>
                        <span className="text-xl md:flex font-extralight text-gray-200 hidden">|</span>
                        <span className="text-xl flex font-extralight text-gray-200 md:hidden my-4 justify-center">---</span>
                        <p className="md:text-sm md:font-extralight text-gray-200 mb-8 md:mb-0">Shoe Store</p>
                    </div>
                    {/* Navigation */}
                    <div className="md:flex flex-row gap-10 text-center md:text-wrap md:text-xs md:font-extralight text-gray-200">
                        <a href="" className='flex justify-center mb-8'>Home</a>
                        <a href="" className='flex justify-center mb-8'>Shop</a>
                        <a href="" className='flex justify-center mb-8'>Products</a>
                        <a href="" className='flex justify-center mb-8'>Contact Us</a>
                    </div>
                </div>
                {/* Bottom */}
                <div className='border-t-[0.5px] mx-16'> </div>
                <div>{(widthCheck > 770 ? <div className="w-[100%] md:flex md:justify-between px-16 pb-12 pt-4 text-center">
                    <div className="text-xs md:flex md:justify-evenly md:gap-6">
                        <p className="font-extralight">Copyright © 2023 SOLESPHERE. All rights reserved </p>
                        <p className="font-semibold">Privacy Policy</p>
                        <p className="font-semibold text-">Terms of Use</p>
                    </div>
                    {/* Icons */}
                    <div className="flex md:justify-end justify-center">
                        <img src={icons} alt="Social media icons" className='w-[30%]'/>
                    </div>
                </div> : 
                <div className="w-[100%] md:flex md:justify-between px-16 pb-12 pt-4 text-center">
                    <div className="flex md:justify-end justify-center mb-6 p-2">
                        <img src={icons} alt="Social media icons" className='w-[30%]'/>
                    </div>
                    <div className="text-sm md:flex md:justify-evenly md:gap-6">
                        <span className='flex justify-center gap-10 mb-10 font-bold'><p>Privacy Policy</p>
                        <p>Terms of Use</p></span>
                        <p className="mb-8">Copyright © 2023 3legant. All rights reserved </p>                        
                    </div>
                    {/* Icons */}
                    
                </div>)}</div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer
