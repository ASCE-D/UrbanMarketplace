import { createReducer } from "@reduxjs/toolkit";

// let product = [] 

export const productReducer = createReducer(
  {
    //intial state for
    products: []
  },
  {
    ALL_PRODUCT_REQUEST: (state, action) => {
      
      product = [];
    },

    ALL_PRODUCT_SUCCESS: (state, action) => {
      
      state.products = action.payload.products;
      // console.log("state.products",state.products);
    },


  }
);

createReducer()
