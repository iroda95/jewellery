import React from "react"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Products from "../components/Product"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
