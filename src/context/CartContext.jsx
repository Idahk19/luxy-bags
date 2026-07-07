import { createContext, useState } from "react";
import { useEffect } from "react"

export const CartContext = createContext();

export function CartProvider({children}) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const cartKey = currentUser ? `cart_${currentUser.email}` : "guest_cart";
      
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem(cartKey);
        return savedCart ? JSON.parse(savedCart) : [];
    });
     useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}