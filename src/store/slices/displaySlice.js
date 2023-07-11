import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    initialProducts:[],
    displayProducts: [],
    kids: [],
    mens: [],
    womens: [],
    
  },
  reducers: {
    inital: (state, action) => {
      state.initialProducts = action.payload;
      state.displayProducts = state.initialProducts;
      state.kids = state.displayProducts.filter(
        (item) => item.category == "kids"
      );
      state.mens = state.displayProducts.filter(
        (item) => item.category == "mens"
      );
      state.womens = state.displayProducts.filter(
        (item) => item.category == "women"
      );
  
    },
    filterByCategory: (state = initialState, action) => {
      const selectedCategory = action.payload;
      if (!(selectedCategory == "")) {
        if (selectedCategory == "mens") {
          state.displayProducts = state.mens;
        } else if (selectedCategory == "womens") {
          state.displayProducts = state.womens;
        } else {
          state.displayProducts = state.kids;
        }
      }
    },
    filterBySort:(state,action)=>{
      const selectedSort = action.payload

      if(selectedSort =="htl"){
        state.displayProducts =  state.displayProducts.slice().sort((a, b) => a.price - b.price);
      }
      else if(selectedSort =="lth"){
        state.displayProducts =  state.displayProducts.slice().sort((a, b) => b.price - a.price);
      }
      else{
        state.displayProducts =  state.displayProducts.slice().sort((a, b) => b.review - a.review);
      }
    },
    clear:(state,action)=>{
      state.displayProducts = state.initialProducts;
    }
  },
});

export default displaySlice.reducer;

export const {clear, filterByCategory, inital,filterBySort } = displaySlice.actions;
