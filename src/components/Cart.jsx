import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import React from 'react'

function Cart() {
    const { cart } = useContext(CartContext)
  return (
    <div>
      {cart.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default Cart
