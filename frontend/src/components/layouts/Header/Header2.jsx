import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <nav className="bg-black text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="text-xl font-semibold">UrbanMarketplace</h2>
        </Link>

        <form
          className="flex items-center justify-center mx-8 bg-white border rounded-md overflow-hidden shadow-md"
          onSubmit={searchSubmitHandler}
        >
          <input
            type="text"
            className="flex-grow px-4 py-1 border-none focus:ring-0"
            placeholder="Search for products..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            className=" px-6 py-2 text-black font-semibold flex items-center justify-center  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black pt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l6-6m0 0l-6-6m6 6H3"
              />
            </svg>
          </button>
        </form>

        {/* <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-[80%] sm:w-[300px] h-8"
              style={{ width: "484px" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleSearchSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l6-6m0 0l-6-6m6 6H3"
                  />
                </svg>
              </button>
            </span>
          </div>
          <a href="#" className="flex items-center hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16M4 8h16M4 12h16"
              />
            </svg>
          </a>
        </div> */}
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
