import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App (){
  return(
    <> 
    <Navbar />
    <Router>
       <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
      

  </>
  )
  
}
export default App;