import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { fetchProducts } from "./ProductSlice";
import ProductSlice from "./ProductSlice";
const store=configureStore({
    reducer:{
        cart:cartSlice,
        products:ProductSlice
    }
})
export default store;