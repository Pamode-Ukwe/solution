import imageOne from './assets/stock-6.png'
import imageTwo from './assets/stock-12.png'
import imageThree from './assets/stock-11.png'

const CartItems = () => {
  return (
    <section>
        <div className='md:flex p-4'>
            {/* Left Side */}
            <div className='container'>
                {/* Product and co */}
                <div>
                    <div className="flex justify-between md:w-[670px] w-full mx-12 pt-12 pb-4 font-semibold border-b-2">
                        <span><p>Products</p></span>
                        <span className="flex gap-[90px] ml-[195px]">
                            <p>Quantity</p>
                            <p>Price</p>
                        </span>
                        <p>Subtotal</p>
                    </div>
                {/* Below the line */}
                    <div>
                        <div className="flex md:w-[730px] w-full mx-12 py-6 font-semibold">
                            <div className='flex gap-6 border-b-2'>
                                <div><img src={imageOne} alt="Image" className='object-cover size-[85px] mb-6'/></div>
                                <div>
                                    <p className='text-sm'>Jordan Spizike Low</p>
                                    <p className="text-form-border-gray/80 text-xs">Color White</p>
                                    <button className="text-form-border-gray/80 text-sm">X&nbsp;Remove</button>
                                </div>
                                <p><p className="mx-[80px] mt-4 border-2 border-gray-400/80 rounded-md flex justify-between py-1 px-2 text-xs"><span>-</span><span className='mx-4'>2</span><span>+</span></p></p>
                            </div>
                            <div className='flex gap-12 pt-4 mx-0 border-b-2'>                            
                                <p className="font-light">₦&nbsp;124,000</p>
                                <p className="">₦&nbsp;248,000</p>
                            </div>
                        </div>                
                        {/*  */}
                        <div className="flex md:w-[730px] w-full mx-12 py-6 font-semibold">
                            <div className='flex gap-6  border-b-2'>
                                <div><img src={imageTwo} alt="Image" className='object-cover size-[85px] mb-6'/></div>
                                <div>
                                    <p className='text-sm'>Jordan Max Aura 6</p>
                                    <p className="text-form-border-gray/80 text-xs">Color Black</p>
                                    <button className="text-form-border-gray/80 text-sm">X&nbsp;Remove</button>
                                </div>
                                <p><p className="mx-[80px] mt-4 border-2 border-gray-400/80 rounded-md flex justify-between py-1 px-2 text-xs"><span>-</span><span className='mx-4'>2</span><span>+</span></p></p>
                            </div>
                            <div className='flex gap-12 pt-4 mx-0 border-b-2'>                            
                                <p className="font-light">₦&nbsp;124,000</p>
                                <p className="">₦&nbsp;248,000</p>
                            </div>
                        </div>  
                        {/*  */}
                        <div className="flex md:w-[730px] w-full mx-12 py-6 font-semibold">
                            <div className='flex gap-6 border-b-2'>
                                <div><img src={imageThree} alt="Image" className='object-cover size-[85px] mb-6'/></div>
                                <div>
                                    <p className='text-sm'>Air Jordan 1 Element</p>
                                    <p className="text-form-border-gray/80 text-xs">Color White</p>
                                    <button className="text-form-border-gray/80 text-sm">X&nbsp;Remove</button>
                                </div>
                                <p><p className="mx-[75px] mt-4 border-2 border-gray-400/80 rounded-md flex justify-between py-1 px-2 text-xs"><span>-</span><span className='mx-4'>1</span><span>+</span></p></p>
                            </div>
                            <div className='flex gap-14 pt-4 mx-1 border-b-2'>                            
                                <p className="font-light">₦&nbsp;124,000</p>
                                <p className="">₦&nbsp;124,000</p>
                            </div>
                        </div>  
                    </div>
                    </div>
                <div className='px-16 py-6 text-center md:text-start'>
                    <p className='mb-3 font-semibold'>Have a coupon?</p>
                    <p className='text-sm text-gray-600 mb-3'>Add your code for an instant card discount</p>
                    <span className='border-2 rounded-md w-[600px] p-1'><input type="text" placeholder={`${'🧾ᴄᴏᴜᴘᴏɴ ᴄᴏᴅᴇ'}`} className='outline-0'/><button className='text-[11px] font-semibold'>Apply</button></span>
                </div>
            </div>
            {/* Right Side */}
            <div className='border-2 rounded-2xl border-zinc-300 h-[490px] w-[490px] px-6 mt-10 mr-6 md:ml-0 sm:ml-[16%] ml-[4%]'>
                <p className='font-semibold text-xl py-4 px-5'>Cart Summary</p>
                <div>
                    <span className='flex p-3 border-[2px] border-main-black rounded-md mb-6 font-semibold gap-4'><input type="radio"/><span className='flex w-full justify-between'><p>Free shiping</p><p>0.00</p></span></span>
                    <span className='flex p-3 border-[1px] border-main-black rounded-md mb-6 font-semibold gap-4'><input type="radio" /><span className='flex w-full justify-between'><p>Express shiping</p><p>2,340.00</p></span></span>
                    <span className='flex p-3 border-[1px] border-main-black rounded-md mb-6 font-semibold gap-4'><input type="radio" /><span className='flex w-full justify-between'><p>Pick up</p><p>0.00</p></span></span>
                </div>
                <span className='flex gap-4 pt-2 pb-4 mb-2 font-bold border-b-2 text-sm'><span className='flex w-full justify-between'><p>Sub Total</p><p>620,000.00</p></span></span>
                <span className='flex gap-4 py-2 mb-8 font-bold text-lg'><span className='flex w-full justify-between'><p>Total</p><p>620,000.00</p></span></span>
                <button className="p-3 outline-none my-2 bg-main-black text-white w-full rounded-md">Checkout</button>
            </div>
        </div>
    </section>
  )
}

export default CartItems