
import Footer from "./components/layouts/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header2 from "./components/layouts/Header/Header2"
import Header from "./components/layouts/Header/Header"
import Home from "./components/Home/Home"
import Home2 from "./components/Home/Home2.jsx"
import Cart from "./components/Cart/Cart"
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <>
       <Router>
        {/* <Header /> */}
        <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} /> */}
           <Route path="/" element={<Home2 />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  )
}

export default App
