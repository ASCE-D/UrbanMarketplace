import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  
  return (
    <nav className="bg-gray-900 text-white p-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-semibold">UrbanMarketplace</h2>

        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/cart" className="flex items-center hover:text-gray-300">
            <FiShoppingBag className="text-xl" />
            <p className="ml-1">{cartItems.length}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
