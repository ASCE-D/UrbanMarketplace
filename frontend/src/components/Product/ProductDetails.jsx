import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../layouts/Loader/Loader";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id]);
  console.log(product);
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <>
      <div>
        {product.name}
        <div className="grid grid-cols-2 gap-8">
          <div>
            {product && product.images && product.images.length > 0 ? (
              <img
                src={product.images[0].url}
                alt={product.name}
                className="w-full h-auto"
                onError={(e) => {
                  console.error("Error loading image:", e);
                }}
              />
            ) : (
              <p><Loader/></p>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-gray-700 text-lg font-semibold mb-2">
              ₹{product.price}
            </p>
            <p
              className={`mb-2 ${
                product.Stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.Stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <button
              className={`py-2 px-4 bg-blue-500 text-white rounded-md ${
                product.Stock <= 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={product.Stock <= 0}
              onClick={() =>
                addToCartHandler({
                  name: product.name,
                  price: product.price,
                  id: product._id,
                  quantity: 1,
                  imgSrc: product.images[0].url,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
