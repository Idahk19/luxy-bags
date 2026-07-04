import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  House,
  ShoppingBag,
  Info,
  Phone,
  User,
} from "lucide-react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart, setCart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b bg-pink-300/60
    bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60
     flex  justify-between items-center  "
    >
      <Link to="/" className="flex items-center">
        <img
          src="/images/logo2.png"
          alt="Luxy Bags"
          className="h-25 w-auto object-contain"
        />
        <h1 className="text-xl font-bold text-gray-900">Luxy Bags</h1>
      </Link>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>

      <div className="hidden md:flex items-center justify-between flex-1">
        <ul className="flex gap-6 mx-auto">
          <li className="hover:text-pink-500 flex items-center gap-2">
            <House className="w-4 h-4" />
            <Link to="/"> Home</Link>
          </li>

          <li className="hover:text-pink-500 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <Link to="/products"> Products</Link>
          </li>

          <li className="hover:text-pink-500 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <Link to="/about"> About Us</Link>
          </li>

          <li className="hover:text-pink-500 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <Link to="/contact"> Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Login
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 mr-3" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-pink-100 shadow-lg md:hidden">
          <ul className="flex flex-col p-4 gap-4">
            <li className="hover:text-pink-500 flex items-center gap-2">
              <House className="w-4 h-4" />
              <Link to="/"> Home</Link>
            </li>

            <li className="hover:text-pink-500 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <Link to="/products"> Products</Link>
            </li>

            <li className="hover:text-pink-500 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <Link to="/about"> About Us</Link>
            </li>

            <li className="hover:text-pink-500 flex items-center gap-2">
              <Phone className="w-4 h-4" />
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
