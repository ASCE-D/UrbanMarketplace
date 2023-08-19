import { createReducer } from "@reduxjs/toolkit";


export const productReducer = createReducer(
  {
    //intial state for
    product: [],
    loading:false,
    productsCount:null,
  },
  {
    ALL_PRODUCT_REQUEST: (state, action) => {
       loading = true;
       
    },

    ALL_PRODUCT_SUCCESS:(state, action) => {
        loading = false;
        product = action.payload.products;
        productsCount= action.payload.productsCount;
  },

  ALL_PRODUCT_FAIL:(state, action) => {
    loading = false;
    error= action.payload
  }


  
}
);
