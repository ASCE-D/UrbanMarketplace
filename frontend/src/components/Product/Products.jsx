

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productAction";
import React, { useEffect } from 'react';
import toast from "react-hot-toast";
const Products = () => {
  const { products } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products)

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {products.length > 0 ? (
        products.map((product) => (
         
          <Product
            key={product._id}
            imgSrc={product.images[0]?.url||''} // Assuming you want to display the first image
            name={product.name}
            price={product.price}
            id={product._id}
            ratings={product.ratings}
            stock={product.Stock}
            numOfReviews={product.numOfReviews}
            handler={addToCartHandler}
          />
        ))
      ) : (
        <h1 className="text-xl">No Items Yet</h1>
      )}
    </div>
  );
};


const Product = ({ imgSrc, name, price, id, ratings, stock, numOfReviews,handler }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative">
        <img src={imgSrc} alt={name} className="w-full h-40 object-cover rounded-md" />
        <span className="bg-green-500 text-white px-2 py-1 rounded-full absolute top-2 right-2">
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">₹{price}</p>
      <p className="text-gray-400">Ratings: {ratings}</p>
      <p className="text-gray-400">Reviews: {numOfReviews}</p>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );
};


export default Products;
