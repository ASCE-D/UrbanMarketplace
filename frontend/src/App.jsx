
import Footer from "./components/layouts/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/layouts/Header/Header"
import Home from "./components/Home/Home"


function App() {


  return (
    <>
       <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
