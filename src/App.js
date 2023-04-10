import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./components/Product"
import SignIn from './pages/SignIn'

import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our_products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
