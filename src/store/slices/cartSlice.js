import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  
  },
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToAdd) {
        itemToAdd.quantity += 1;
        return;
      }
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    decreItemFromCart:(state,action)=>{
        const itemToAdd = state.cartItems.find(
            (item) => item.id === action.payload
          );
          if(itemToAdd){
            itemToAdd.quantity-=1
            if(itemToAdd.quantity ==0){
                state.cartItems = state.cartItems.filter((item) =>item.id !== action.payload)
            }
          }
    },
    removeItemFromCart :(state,action)=>{
        state.cartItems = state.cartItems.filter((item) =>item.id !== action.payload)
    }
  },
});

export default cartSlice.reducer;
export const {addItemToCart,decreItemFromCart,removeItemFromCart} = cartSlice.actions