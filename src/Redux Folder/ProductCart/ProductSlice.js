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
        let key = "quantity"
        let temp = action.payload.map((item)=>{
            item[key]=1
            return item
        })
        state.product = temp
    },
    storeCart:(state,action)=>{
        state.cart = [...state.cart, action.payload]; 
    },
    addQuantity:(state,action)=>{
        action.payload.quantity+=1
        state.cart = [...state.cart, action.payload]; 
    },
    minusQuantity:(state)=>{
        action.payload.quantity-=1
        state.cart = [...state.cart, action.payload];
    }
  },

})

// Action creators are generated for each case reducer function
export const { storeData,storeCart,addQuantity,minusQuantity} = storeSlice.actions

export default storeSlice.reducer