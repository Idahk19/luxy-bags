function ProductCard ({product}){
    return(
         <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={`${import.meta.env.BASE_URL}${product.image}`}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-pink-600 font-bold text-lg mt-3">
          {product.price}
        </p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>

    )
}

export default ProductCard;