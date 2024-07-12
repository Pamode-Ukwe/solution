import exclusiveDealOne from "../src/assets/exclusive-deal-2.png"
import exclusiveDealTwo from "../src/assets/exclusive-deal-1.png"
import exclusiveDealThree from "../src/assets/exclusive-deal-3.png"

const Shop = () => {
  return (
    <section className="container px-10 pt-10 font-raleway">
      <div className="text-3xl font-semibold font-inconsolata">Exclusive Deals Just For You</div>
      {/* Items */}
      <div className="md:flex md:gap-4 py-10 border-b-2">
        <div className="bg-exclusive-deal-1 md:w-1/3 p-2 rounded-3xl mb-10 md:mb-0">
          <div className="flex justify-center mx-auto h-[58%] py-2"><img src={exclusiveDealOne} alt="Image" className="object-cover" /></div>
          <div className="text-center p-1">
            <h1 className="font-bold text-xl">Limited-Time Offers</h1>
            <h2 className="py-2">Grab hot deals before they are gone! Exclusive discounts on top brands for a limited time.</h2>
            <button className="py-3 px-9 outline-none rounded-full my-2 bg-black font-semibold hover:shadow-lg text-exclusive-deal-1">Explore Now</button>
          </div>
        </div>
        <div className="bg-exclusive-deal-2 md:w-1/3 p-2 rounded-3xl mb-10 md:mb-0">
          <div className="flex justify-center mx-auto h-[58%]"><img src={exclusiveDealTwo} alt="Image" className="object-cover" /></div>
          <div className="text-center p-1">
            <h1 className="font-bold text-xl">Get Suprise Item</h1>
            <h2 className="py-2">Discover exclusive suprises curated just for you. Don't miss out on these rare finds!</h2>
            <button className="py-3 px-9 outline-none rounded-full my-2 bg-black font-semibold hover:shadow-lg text-exclusive-deal-2">Explore Now</button>
          </div>
        </div>
        <div className="bg-exclusive-deal-3 md:w-1/3 p-2 rounded-3xl mb-10 md:mb-0">
          <div className="flex justify-center mx-auto h-[58%]"><img src={exclusiveDealThree} alt="Image" className="object-cover" /></div>
          <div className="text-center p-1">
            <h1 className="font-bold text-xl">Members Only Access</h1>
            <h2 className="py-2">Unlock special perks and early access to new releases and stay ahead in the sneaker game.</h2>
            <button className="py-3 px-9 outline-none rounded-full my-2 bg-black font-semibold hover:shadow-lg text-exclusive-deal-3">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  )     
}

export default Shop
// Computerize the way the write up rolls out
