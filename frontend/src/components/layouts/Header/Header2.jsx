import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-gray-900 text-white p-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="text-xl font-semibold">UrbanMarketplace</h2>
        </Link>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search..."
              class="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none w-[80%] sm:w-[300px] h-8"
              style={{ width: "484px" }}
            />

            <span class="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="submit"
                class="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l6-6m0 0l-6-6m6 6H3"
                  />
                </svg>
              </button>
            </span>
          </div>
          <a href="#" class="flex items-center hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4h16M4 8h16M4 12h16"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
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
