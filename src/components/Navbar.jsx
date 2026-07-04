import { Link } from 'react-router-dom'

function Navbar(){
    return(
   <nav className="sticky top-0 z-50 w-full border-b bg-pink-300/60 bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center p-4 ">
      <h1 className="text-2xl font-bold">Luxy Bags</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/"> Home</Link>
        </li>

        <li>
          <Link to="/products"> Products</Link>
        </li>

        <li>
          <Link to="/about"> About Us</Link>
        </li>

        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
      </ul>
    </nav> 
    )
}
 
export default Navbar;