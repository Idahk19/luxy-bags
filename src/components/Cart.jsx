import { useContext } from "react"
import { CartContext } from "../context/CartContext"

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
    <section className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-pink-600 font-bold">
                    Ksh {item.price}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Total: Ksh {totalPrice}
              </h2>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;

