import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const { products,loading,productsCount} = useSelector((state)=>state.cart);
   const dispatch = useDispatch()

   const getProduct = () => async (dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST});
        const {data} = await axios.get("/api/v1/products")
    } catch(e){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
    })}

   }

  return (
    <div>
      
    </div>
  )
}

export default Products
