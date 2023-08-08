import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [], 
  cart:[],
}

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    storeData: (state,action) => {
        state.product = action.payload
    },
    storeCart:(state,action)=>{
        state.cart = [...state.cart, action.payload]; 
    }
  },

})

// Action creators are generated for each case reducer function
export const { storeData,storeCart} = storeSlice.actions

export default storeSlice.reducer