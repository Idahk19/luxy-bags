import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Cart from "./components/Cart";
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import { Toaster } from "sonner"

function App (){
  return(
    <> 
     <Router>
      <Navbar />
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
       <Route path="/cart" element={<Cart />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  </>
  )
  
}
export default App;