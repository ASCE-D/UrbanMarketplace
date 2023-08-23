import { createReducer } from "@reduxjs/toolkit";

// let product = [] 

export const productReducer = createReducer(
  {
    //intial state for
    // loading:true,
    products: []
  },
  {
    ALL_PRODUCT_REQUEST: (state, action) => {
      // state.loading = false;
      state.products = [];
    },

    ALL_PRODUCT_SUCCESS : (state, action) => {
      // state.loading = false;
      state.products = action.payload.products;
      // state.loading = false;
      
      // console.log("state.products",state.products);
    },
    ALL_PRODUCT_FAIL: (state,action) => {
      state.loading= false
        error= action.payload
    },

  }
);


export const ProductDetailsReducer = createReducer (
  {
    product:{}
  },
  {
  PRODUCT_DETAILS_REQUEST : (state, action) =>{
      state.product={}
  },
  PRODUCT_DETAILS_SUCCESS : (state, action) =>{
    state.product= action.payload;
  },
}


)