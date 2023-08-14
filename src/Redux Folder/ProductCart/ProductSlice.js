// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   product: [], 
//   cart:[],
// }

// const storeSlice = createSlice({
//   name: 'storeSlice',
//   initialState,
//   reducers: {
//     storeData: (state,action) => {
//         let key = "quantity"
//         let temp = action.payload.map((item)=>{
//             item[key]=1
//             return item
//         })
//         state.product = temp
//     },
//     storeCart:(state,action)=>{
//         state.cart = [...state.cart, action.payload]; 
//     },
//     addQuantity:(state,action)=>{
//         console.log(action)
//         // action.payload.quantity+=1
//         // state.cart = [...state.cart, action.payload]; 
//     },
//     minusQuantity:(state)=>{
//         console.log(action)

//         // action.payload.quantity-=1
//         // state.cart = [...state.cart, action.payload];
//     }
//   },

// })

// // Action creators are generated for each case reducer function
// export const { storeData,storeCart,addQuantity,minusQuantity} = storeSlice.actions

// export default storeSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  forAddedToCart:{}//keys are those which present in cart data
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    storeData: (state, action) => {

      state.product = action.payload;
    },
    storeCart: (state, action) => {
        const {id} = action.payload
      state.cart = [...state.cart, action.payload];
      state.forAddedToCart[id]="manas"
    },
    addQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          
          item.quantity = item.quantity ? item.quantity + 1 : 2;
        }
        return item;
      });
    },
    minusQuantity: (state, action) => {
      const currentProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!currentProduct) {
        return;
      }

      const { quantity } = currentProduct;

      // No Quantity, then remove
      if (!quantity || quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        return;
      }

      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          item.quantity--;
        }
        return item;
      });
    },
    removeItem:(state,action)=>{
        state.cart = state.cart.filter((item) => item.id !== action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { storeData, storeCart, addQuantity, minusQuantity ,removeItem} =
  storeSlice.actions;

export default storeSlice.reducer;