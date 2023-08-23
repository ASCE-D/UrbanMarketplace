import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { ProductDetailsReducer, productReducer } from "./productReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer,
    product: ProductDetailsReducer,
    user : userReducer
  },
});

export default store;