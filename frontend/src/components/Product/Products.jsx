import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Products = ({product}) => {
  const { products } = useSelector(
    (state) => state.cart
  );

  console.log("products", products)
  console.log("product", product)
  
  return (
    <Link to={product._id}>
      
      <p>{product.name}</p>
      <span>{products.price}</span>

    </Link>
  );
};

export default Products;
