import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Trash2 } from "lucide-react"
import { Link } from "react-router-dom";

import React from 'react'

function Cart() {
    const { cart, setCart } = useContext(CartContext)

    const totalPrice = cart.reduce(
        (sum, item) => sum + (item.price * (item.quantity || 1)),0);

    const handleRemoveItem = (itemId) => {
       const updatedCart = cart.filter(item => item.id !== itemId);
       setCart(updatedCart); 
    }
    const handleClearCart = () => {
        setCart([]);
    }
  return (
  <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
        <h1 className="text-3xl font-semibold mt-2">
            Shopping Bag
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-15 border rounded-3xl">

            <ShoppingBag
              size={70}
              className="mx-auto text-gray-300 mb-6"
            />

            <h2 className="text-3xl font-semibold">
              Your shopping bag is empty
            </h2>

            <p className="text-gray-500 mt-3 mb-8">
              Explore our latest collection and discover timeless elegance.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-14">

            {/* PRODUCTS */}
            <div className="lg:col-span-2 space-y-8">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition duration-300"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 h-44 object-cover rounded-2xl"
                  />

                  {/* DETAILS */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      <p className="uppercase text-xs tracking-[0.25em] text-gray-400">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-semibold mt-2">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-4 leading-7">
                        {item.description}
                      </p>

                    </div>

                    <div className="flex justify-between items-center mt-8">

                      <div>

                        <p className="text-gray-400 text-sm">
                          Price
                        </p>

                        <h3 className="text-2xl font-bold">
                          Ksh {item.price.toLocaleString()}
                        </h3>

                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition"
                      >
                        <Trash2 size={18} />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* SUMMARY */}
            <div>

              <div className="border border-gray-200 rounded-3xl p-8 sticky top-28">

                <h2 className="text-2xl font-semibold mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <span className="text-gray-500">Items</span>
                    <span>{cart.length}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Discount</span>
                    <span>-</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">

                    <span>Total</span>

                    <span>
                      Ksh {totalPrice.toLocaleString()}
                    </span>

                  </div>

                </div>

                <button
                  className="w-full mt-10 bg-black text-white rounded-full py-4 text-lg hover:bg-gray-900 transition"
                >
                  Secure Checkout
                </button>

                <button
                  onClick={handleClearCart}
                  className="w-full mt-4 border border-gray-300 rounded-full py-4 hover:bg-gray-100 transition"
                >
                  Clear Shopping Bag
                </button>

                <Link
                  to="/products"
                  className="block text-center mt-8 text-gray-700 hover:text-black"
                >
                  Continue Shopping
                </Link>


                </div>

              </div>

            </div>

          
        )}

      </div>
    </section>
  );
}

export default Cart;

