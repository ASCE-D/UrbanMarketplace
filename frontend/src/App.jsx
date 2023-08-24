import Footer from "./components/layouts/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header2 from "./components/layouts/Header/Header2";
import Header from "./components/layouts/Header/Header";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2.jsx";
import Cart from "./components/Cart/Cart";
import { Toaster } from "react-hot-toast";

import About from "./components/layouts/About/About";
import ProductDetails from "./components/Product/ProductDetails";
import LoginSignUp from "./components/User/LoginSignUp";
import Products from "./components/Product/Products";
import ProductList from "./components/Admin/ProductList";
import NewProduct from "./components/Admin/NewProduct";
import Dashboard from "./components/Admin/Dashboard";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProduct from "./components/Admin/UpdateProduct";
import Profile from "./components/User/Profile";

export const server = "http://localhost:5000";

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
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route  path="/products" element={Products} /> */}
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/login" element={<LoginSignUp />} />
          {/* <Route path="/account" element={<ProtectedRoute isAdmin={true} element={<Profile />} />} /> */}
          <Route
  path="/account"
  element={
    <ProtectedRoute >
      <Profile />
    </ProtectedRoute>
  }
/>

<Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}
         ><Dashboard /></ProtectedRoute>} />       
     
        
          {/* <ProtectedRoute
          
          path="/admin/products"
          isAdmin={true}
          element={<ProductList/>}
        />
        <ProtectedRoute
          
          path="/admin/product"
          isAdmin={true}
          element={<NewProduct/>}
        />

        <ProtectedRoute
          
          path="/admin/product/:id"
          isAdmin={true}
          element={<UpdateProduct/>}
        /> */}
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;
