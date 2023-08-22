import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { ProductDetailsReducer, productReducer } from "./productReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer,
    product: ProductDetailsReducer,
  },
});

export default store;