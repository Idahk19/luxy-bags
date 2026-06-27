function Footer(){
     return(
        <footer className="bg-black text-white px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold text-pink-400 mb-4">Luxy Bags</h3>
          <p className="text-white">
            Luxury handbags designed to bring confidence, sophistication, and
            style to every woman.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-pink-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <a href="#" className="hover:text-pink-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 font-bold mb-4">Contact Us</h3>
          <p className="text-white">luxybags@gmail.com</p>
          <p className="text-white">+254757732215</p>
          <p className="text-white">Nairobi, Kenya</p>
        </div>

        <div className="md:col-span-3 border-t border-gray-700 mt-10 pt-6 text-center text-white">
          &copy; 2026 Luxy Bags. All rights reserved.
        </div>
      </footer>
     )
}
export default Footer;



