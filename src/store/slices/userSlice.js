// authSlice.js

import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:{
        email:null,
        photoURL:null
    }
  },
  reducers: {
    setUser: (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
      },
      
   
  },
});

export const { setUser } = authSlice.actions;



export default authSlice.reducer;
