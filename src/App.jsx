import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

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
      </Routes>
    </Router>
      

  </>
  )
  
}
export default App;