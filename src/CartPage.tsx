import CartItems from "./CartItems"
import Checkout from "./Checkout"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react"


const CartPage = () => {
  const [modalOne, setModalOne] = useState(true)
  function shuffle() {
    setModalOne(false)
  }
  return (
    <>
      <Navbar/>
      <div>
        <p className="text-4xl font-bold text-center font-raleway mb-10">Cart</p>
        {/* Div to house everything */}
        <div className="flex md:justify-center gap-16">
          {/* First modal */}
          <div className={`${modalOne ? 'border-b-2 border-black pb-4 md:w-[20%] w-1/3' : 'border-b-2 border-sucess-green pb-4 md:w-[20%] w-1/3'}`}>
            <div className="flex gap-6 items-center">
              <p className={`${'py-1.5 px-3.5 bg-black text-white rounded-[100%]'}  ${modalOne? 'bg-black':'bg-sucess-green'}`}>{modalOne ? 1 : '🗸'}</p>
              <p className={`${modalOne ? 'font-semibold text-nowrap pb-2':'font-semibold text-nowrap text-sucess-green pb-2'}`}>Shopping cart</p>
            </div>
          </div>
          {/* Second modal */}
          <div className={`${!modalOne && 'border-b-2 border-black md:w-[20%] w-1/3'}`}>
            <div className={`${!modalOne ? 'flex gap-6 items-center text-gray-400 ' : 'flex gap-6 items-center text-gray-400 md:w-[20%] w-1/3'}`}>
              <p className={`${!modalOne ? 'py-1.5 px-3.5 bg-black text-white rounded-[100%]' : 'py-1.5 px-3.5 bg-gray-400 text-white rounded-[100%]'}`}>2</p>
              <p className={`${!modalOne ? "font-semibold text-nowrap cursor-pointer text-black pb-2" : "font-semibold text-nowrap cursor-pointer"}`} onClick={shuffle}>Checkout details</p>
            </div>
          </div>
          {/* Third modal */}
          <div>
            <div className="flex gap-6 items-center text-gray-400 md:w-[20%] w-1/3">
              <p className="py-1.5 px-3.5 bg-gray-400 text-white rounded-[100%]">3</p>
              <p className="font-semibold text-nowrap">Order complete</p>
            </div>
          </div>
        </div>
        {/* div to house the display area for modal pages */}
        <div>
          {modalOne ? <CartItems/> : <Checkout/>}         
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CartPage
