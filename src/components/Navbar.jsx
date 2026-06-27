function Navbar(){
    return(
    <nav className="bg-pink-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Luxy Bags</h1>

      <ul className="flex gap-6">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav> 
    )
}
 
export default Navbar;