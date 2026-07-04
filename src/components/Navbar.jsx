import { Link } from 'react-router-dom'
import { ShoppingCart } from "lucide-react";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar(){

  const { cart, setCart } = useContext(CartContext);
    return(
   <nav className="sticky top-0 z-50 w-full border-b bg-pink-300/60
    bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60
     flex justify-between items-center p-4 ">
      <h1 className="text-2xl font-bold">Luxy Bags</h1>

      <ul className="flex gap-6 ">
        <li className="hover:text-pink-500">
          <Link to="/"> Home</Link>
        </li>

        <li className="hover:text-pink-500">
          <Link to="/products"> Products</Link>
        </li>

        <li className="hover:text-pink-500">
          <Link to="/about"> About Us</Link>
        </li>

        <li className="hover:text-pink-500">
          <Link to="/contact"> Contact Us</Link>
        </li>
      </ul>
      <Link to="/cart" className="relative">
  <ShoppingCart className="w-7 h-7" />

  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cart.length}
    </span>
  )}
</Link>
    </nav> 
    )
}
 
export default Navbar;