function Footer(){
     return(
        <footer className="bg-gray-900 text-white px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Luxy Bags</h3>
          <p className="text-gray-400">
            Luxury handbags designed to bring confidence, sophistication, and
            style to every woman.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">luxybags@gmail.com</p>
          <p className="text-gray-400">+254757732215</p>
          <p className="text-gray-400">Nairobi, Kenya</p>
        </div>

        <div className="md:col-span-3 border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          &copy; 2026 Luxy Bags. All rights reserved.
        </div>
      </footer>
     )
}
export default Footer;



