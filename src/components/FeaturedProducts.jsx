import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";


function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("/products.json")
        .then((response)=> response.json())
        .then((data)=> {
            setProducts(data.slice(0,6));
        })
        .catch((err)=> console.error(err));
    }, []);
  return (
    <div>
         <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Featured Collection
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Discover some of our most loved handbags, carefully selected for
          elegance, quality, and everyday style.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default FeaturedProducts
