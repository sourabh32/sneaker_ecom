import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"
import displayReducer from "./slices/displaySlice"
import userReducer from "./slices/userSlice"


const store = configureStore({
    reducer:{
   productReducer,
   cartReducer,
   displayReducer,
   userReducer
    }
})

export default store