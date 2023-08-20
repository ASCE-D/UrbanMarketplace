

import { useDispatch, useSelector } from "react-redux";
 import { getAllProducts } from "../../actions/productAction";
 import React, { useEffect } from 'react'

const Products = () => {
  const{ products } =useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products)

  return (
    <div>
      <Product 
      name={products[0].name}
      price={products[0].price}
      id={products[0]._id}

      />
    </div>
  )
}
const Product = ({
  
  name,
  price,
  id,
}) => {
  return (
    <>
    <div>
   {name} {price} {id}
    </div>
    </>
  )
}

export default Products

