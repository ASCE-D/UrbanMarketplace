
import Footer from "./components/layouts/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header2 from "./components/layouts/Header/Header2"
import Header from "./components/layouts/Header/Header"
import Home from "./components/Home/Home"
import Home2 from "./components/Home/Home2.jsx"
import Cart from "./components/Cart/Cart"
import { Toaster } from "react-hot-toast";
import Products from "./components/Product/Products"
import About from "./components/layouts/About/About"
import ProductDetails from "./components/Product/ProductDetails"


function App() {


  return (
    <>
       <Router>
        {/* <Header /> */}
        <Header2 />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home2 />} /> */}
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  )
}

export default App
