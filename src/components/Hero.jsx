import { Link } from "react-router-dom"

function Hero(){
    return(
       <section className="w-full h-screen bg-cover flex items-center bg-center "
        style={{ backgroundImage: `url('/images/bg-image.jpg')`  }}>

        <div className="
        w-full h-screen
bg-black/40
backdrop-blur
border
border-white/40
rounded-2xl
p-10
shadow-xl
flex
flex-col
justify-center
items-center

">
       <div className="max-w-5xl text-left sm:text-center">
  <p className="uppercase tracking-[0.35em] text-pink-300 text-sm font-semibold mb-4">
    LUXY BAGS
  </p>

  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
    Luxury in <br />
    Every Detail
  </h1>

  <p className="text-lg md:text-xl text-gray-300 leading-8 mb-10">
    Elevate your everyday style with handbags crafted for elegance,
    confidence, and timeless beauty. Discover premium designs that
    complement every occasion and leave a lasting impression.
  </p>
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition duration-300 hover:scale-105">
   <Link to="/signup"> Sign Up </Link>
  </button>{"  "}
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition duration-300 hover:scale-105">
   <Link to="/products">Collection</Link>
  </button>
</div>
        </div>
       </section> 
    )
}

export default Hero;