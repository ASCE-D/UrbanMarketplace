import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

const Products = () => {
    const { products,loading,productsCount,error} = useSelector((state)=>state.cart);
   const dispatch = useDispatch()

   const getProduct = () => async (dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST});
        const {data} = await axios.get("/api/v1/products")

        dispatch({
          type: ALL_PRODUCT_SUCCESS,
          payload: data,})
    } catch(e){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
    })}

   }
    // const clearErrors= () => async (dispatch) => {
    // dispatch({ type: CLEAR_ERRORS });
    // };

  return (
    <div>
      
    </div>
  )
}

export default Products
