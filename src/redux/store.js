import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: CartSlice
    }
});
export default store;