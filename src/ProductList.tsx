import stockOne from "./assets/stock-6.png"
import stockTwo from "./assets/stock-5.png"
import stockThree from "./assets/stock-4.png"
import stockFour from "./assets/stock-3.png"
import stockFive from "./assets/stock-12.png"
import stockSix from "./assets/stock-10.png"
import stockSeven from "./assets/stock-1.png"
import stockEight from "./assets/stock-2.png"
import stockNine from "./assets/stock-11.png"
import stockTen from "./assets/stock-9.png"
import stockEleven from "./assets/stock-8.png"
import stockTwelve from "./assets/stock-7.png"



const ProductList = () => {
    // There was a definite number to be rendered and I didn't want to complicate things so I did it this way on the project
  const products = [
    { id: 1, brand: 'NIKE', type: 'Jordan Spizike Low', price: '₦ 124,000', image: stockOne},
    { id: 2, brand: 'NIKE', type: 'Air Jordan 1 Mid SE', price: '₦ 64,000', image: stockTwo, discount: '33% Off'},
    { id: 3, brand: 'NIKE', type: 'Jordan Max Aura 6', price: '₦ 124,000', image: stockThree},
    { id: 4, brand: 'NIKE', type: 'Air Jordan Six Retro "White/Black', price: '₦ 164,000', image: stockFour, discount: '33% Off'},
    { id: 5, brand: 'NIKE', type: 'Jordan Max Aura 6', price: '₦ 64,000', image: stockFive, discount: '33% Off'},
    { id: 6, brand: 'NIKE', type: 'Nike Air Jordan 5 Retro SE-Sail / Orewood', price: '₦ 124,000', image: stockSix},
    { id: 7, brand: 'NIKE', type: 'Jordan Spizike Low', price: '₦ 54,000', image: stockSeven, discount: '33% Off'},
    { id: 8, brand: 'NIKE', type: 'Air Jordan 1 Retro High OG "Black And White"', price: '₦ 28,000', image: stockEight},
    { id: 9, brand: 'NIKE', type: 'Air Jordan 1 Low G', price: '₦ 46,000', image: stockNine},
    { id: 10, brand: 'NIKE', type: 'Jordan Roam', price: '₦ 34,000', image: stockTen, discount: '33% Off'},
    { id: 11, brand: 'NIKE', type: 'Air Jordan 1 Element', price: '₦ 124,000', image: stockEleven},
    { id: 12, brand: 'NIKE', type: 'Nike Air Jordan 5 Retro SE-Sail / Orewood', price: '₦ 49,000', image: stockTwelve, discount: '33% Off'}
  ];

  return (
    <section className="container mx-auto px-10 py-8 border-b-2">
        <div className="text-2xl font-bold font-raleway mb-8">Latest Products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {products.map(product => (
            <div key={product.id} className="rounded-lg overflow-hidden">
            <div><img className="object-cover" src={product.image} alt={product.type} /></div>
            <div className="py-5">
                <h3 className="text-2xl flex justify-between font-bold text-red-500 font-sans mb-4">{product.price}
                    {product.discount && <span className="text-green-700 text-sm rounded-md font-light p-1 bg-green-200">
                    {product.discount}</span>}</h3>
                <p className="text-gray-500 font-semibold text-sm">{product.brand}</p>
                <p className="font-semibold text-sm">{product.type}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
}

export default ProductList
