import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"
import displayReducer from "./slices/displaySlice"



const store = configureStore({
    reducer:{
   productReducer,
   cartReducer,
   displayReducer,
   
    }
})

export default store