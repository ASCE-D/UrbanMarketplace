import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from '../../actions/productAction';


const ProductList = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAdminProduct())
    },[dispatch]);

const { products } = useSelector((state) => state.products);
console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default ProductList
