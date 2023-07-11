import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSneakerData } from "../../firebase";


export const fetchProducts = createAsyncThunk("products/fetch", async ()=>{
    
    return await fetchSneakerData()
})


const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    extraReducers:function (builder){
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            
            state.products = action.payload;
            
        })
    }
    
})

export default productsSlice.reducer
