import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import {Link} from 'react'
import FeaturedProducts from '../components/FeaturedProducts'

function Home() {
  return (
    <div>
        <Hero />
        <FeaturedProducts />
       <Footer />
    </div>
  )
}

export default Home
