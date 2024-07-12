import pattern from "../src/assets/Hero-page background patterns.png"
import heroSneakers from "../src/assets/Hero sneakers.png"

const Homepage = () => {
  return (
    <section className="min-w-fit min-h-fit bg-hero-bg overflow-clip z-0 font-raleway">
        {/* Pattern i,age */}
        <img src={pattern} className="w-screen opacity-5 z-10 absolute" />
        <div className="z-30 relative flex">
            <div className="md:flex md:justify-between md:gap-20 justify-center">
                {/* Write up */}
                <div className="text-white md:w-1/3 md:pl-16 md:mt-24 grid-flow-row justify-center mx-[9%] md:mx-0">
                        <h1 className="font-bold text-4xl md:w-68 mb-6 mx-[8%] mt-[5%] md:mx-0">Step Up Your Sneaker Game</h1>
                        <h2 className="text-xl font-semibold md:w-[440px] mb-8 mx-[8%] md:mx-0">Discover the latest and greatest in sneaker fashion. From exclusive releases to&nbsp; unbeatable deals, find your perfect pair today!</h2>
                        <button className="py-3 px-9 outline-none rounded-full my-2 bg-main-black text-lg font-semibold hover:shadow-lg mx-[33%] md:mx-0">Explore Now</button>
                </div>
                {/* Image */}
                <div className="md:w-1/2 md:mr-8 w-[60%] mx-auto my-[4%] md:my-0 md:mx-0">
                    <img src={heroSneakers} alt="A pair of sneakers" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homepage
