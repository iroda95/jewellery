import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./components/Product"
import SignIn from "./pages/SignIn"
import { useState } from "react"
import { auth } from "./config"

import Navbar from "./components/Navbar"
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("Auth"))

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our_products" element={<Products />} />
          <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
