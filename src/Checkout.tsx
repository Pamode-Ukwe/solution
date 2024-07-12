import firstImage from './assets/stock-6.png'
import secondImage from './assets/stock-12.png'
import thirdImage from './assets/stock-11.png'

const Checkout = () => {
  return (
    <section>
      <div className="p-12 md:flex md:justify-between">
        {/* Forms */}
        <div>
          {/* Form 1 */}
          <div className="border border-gray-500 w-[630px] py-6 px-4 mb-6 rounded-md">
            <p className="font-semibold">Contact Information</p>
            <span className="grid grid-flow-col">
              <span className="">
                <p className="text-xs py-3">FIRST NAME</p>
                <input type="text" placeholder="First name" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
              </span>
              <span className="">
                <p className="text-xs py-3">LAST NAME</p>
                <input type="text" placeholder="Last name" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
              </span>
            </span>
            <span className="py-2">
              <p className="text-xs py-3">PHONE NUMBER</p>
              <input type="text" placeholder="Phone number" className="py-1 px-2 border border-gray-500 rounded-lg w-full"/>
              <p className="text-xs py-3">EMAIL ADRESS</p>
              <input type="text" placeholder="Your Email" className="py-1 px-2 border border-gray-500 rounded-lg w-full mb-2"/>
            </span>
          </div>
          {/* Form 2 */}
          <div className="border border-gray-500 w-[630px] py-6 px-4 mb-6 rounded-md">
            <p className="font-semibold">Shipping Adress</p>
            <span>
              <p className="text-xs py-3">STREET ADRESS</p>
              <input type="text" placeholder="Street Adress" className="py-1 px-2 border border-gray-500 rounded-lg w-full mb-2"/>
              <p className="text-xs py-3">COUNTRY</p>
              <input type="text" placeholder="Country" className="py-1 px-2 border border-gray-500 rounded-lg w-full mb-2"/>
              <p className="text-xs py-3">TOWN/CITY</p>
              <input type="text" placeholder="Town/City" className="py-1 px-2 border border-gray-500 rounded-lg w-full mb-2"/>
              <span className="grid grid-flow-col mb-3">
                <span className="">
                  <p className="text-xs py-3">STATE</p>
                  <input type="text" placeholder="State" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
                </span>
                <span className="">
                  <p className="text-xs py-3">ZIP CODE</p>
                  <input type="text" placeholder="Zip Code" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
              </span>
            </span>
            <span className="text-xs"><input type="checkbox" className="mr-2"/>Use a different billing adress</span>
            </span>
          </div>
          {/* Form 3 */}
          <div className="border w-[630px] py-6 px-4 mb-6 rounded-md border-gray-500">
            <p className="font-semibold mb-6">Payment method</p>
            <span>
              <span className="border border-gray-500 bg-gray-100 rounded-lg w-[90%] py-3">
                <input type="checkbox" className="mx-4"/>
                <input type="text" placeholder="Pay by Credit Card" className="w-[90%] outline-0 bg-gray-100"/>
              </span>
              <p className="border border-gray-500 rounded-lg w-[97.5%] my-8 py-2">
                <input type="checkbox" className="mx-4"/>
                <input type="text" placeholder="Paypal" className="w-[90%] outline-0"/>
              </p>
              <p className="border-b-2 border-gray-300 mb-3"></p>
              <p className="text-xs py-3">CARD NUMBER</p>
              <input type="text" placeholder="1234 1234 1234" className="p-2 border border-gray-500 rounded-lg w-full mb-2"/>
              <span className="grid grid-flow-col mb-3">
              <span className="">
                <p className="text-xs py-3">EXPIRATION DATE</p>
                <input type="text" placeholder="MM/YY" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
              </span>
              <span className="">
                <p className="text-xs py-3">CVC</p>
                <input type="text" placeholder="cvc" className="py-1 px-2 border border-gray-500 rounded-lg w-[90%]"/>
              </span>
            </span>           
            </span>
          </div>
        </div>
        {/* Order summary */}
        <div className="w-[400px] border border-gray-400 h-fit px-4 py-3 rounded-md mx-auto md:mx-0 mt-8 md:mt-0">
          <p className="font-semibold text-lg mb-8">Order summary</p>
          {/* Item 1 */}
          <div className='flex gap-3'>
            <div className='w-[18%]'>
              <img src={firstImage} alt="Image" className='size-18'/>
            </div>
            <div>
              <p className="text-xs font-semibold w-full flex gap-32 pb-1"><span>Jordan Spizike Low</span><span>₦124,000</span></p>
              <p className='text-xs py-1 text-gray-500 font-semibold'>Color white <span className='text-lg md:hidden ml-[70%]'>X</span></p>
              <span className='flex text-xs p-1 border w-[20%] justify-between'><p>-</p>&nbsp;2&nbsp;<p>+</p></span>
            </div>
          </div>
          <p className='border-b-2 border-gray-200 p-3'></p>
          {/* Item 2 */}
          <div className='flex gap-3 mt-8'>
            <div className='w-[18%]'>
              <img src={secondImage} alt="Image" className='size-18'/>
            </div>
            <div>
              <p className="text-xs font-semibold w-full flex gap-32 pb-1"><span>Jordan Max Aura 6</span><span>₦124,000</span></p>
              <p className='text-xs py-1 text-gray-500 font-semibold'>Color black <span className='text-lg md:hidden ml-[70%]'>X</span></p>
              <span className='flex text-xs p-1 border w-[20%] justify-between'><p>-</p>&nbsp;2&nbsp;<p>+</p></span>
            </div>
          </div>
          <p className='border-b-2 border-gray-200 p-3'></p>
          {/* Item 3 */}
          <div className='flex gap-3 mt-8'>
            <div className='w-[18%]'>
              <img src={thirdImage} alt="Image" className='size-18'/>
            </div>
            <div>
              <p className="text-xs font-semibold w-full flex gap-32 pb-1"><span>Air Jordan 1 Element</span><span>₦124,000</span></p>
              <p className='text-xs py-1 text-gray-500 font-semibold'>Color blue <span className='text-lg md:hidden ml-[70%]'>X</span></p>
              <span className='flex text-xs p-1 border w-[20%] justify-between'><p>-</p>&nbsp;2&nbsp;<p>+</p></span>
            </div>
          </div>
          <p className='border-b-2 border-gray-200 p-3'></p>
          <p className='my-6 flex gap-3'><input type="text" placeholder='Input' className='p-2 border rounded-md border-gray-400 w-[85%]'/>
            <button className='p-3 text-xs outline-none bg-main-black text-white rounded-md'>Apply</button>
          </p>
          <p className='font-semibold text-xs w-full flex justify-between px-1'><span>Shipping</span><span>Free</span></p>
          <p className='border-b-2 border-gray-200 p-1'></p>
          <p className='font-semibold text-xs w-full flex justify-between px-1 mt-3'><span>Subtotal</span><span>$99.00</span></p>
          <p className='border-b-2 border-gray-200 p-1'></p>
          <p className='font-bold w-full flex justify-between px-1 mt-3'><span>Total</span><span>$234.00</span></p>
        </div>        
      </div>
      <button className="p-3 outline-none my-2 bg-main-black text-white md:w-[48%] w-[54%] rounded-md md:ml-12 ml-[23%]">Place Order</button>
    </section>
  )
}

export default Checkout
