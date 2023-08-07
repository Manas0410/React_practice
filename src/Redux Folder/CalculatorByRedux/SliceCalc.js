import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 5, 
  valA:4,
  valB:6,
  temp:0,
}

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState,
  reducers: {
    add: (state,action) => {
        state.value = +action.payload.valA+ +action.payload.valB
    },
    sub: (state,action) => {
        state.value = +action.payload.valA- +action.payload.valB
    },
    mult: (state,action) => {
        state.value = +action.payload.valA* +action.payload.valB
    },
    div: (state,action) => {
        state.value = +action.payload.valA/ +action.payload.valB
    },
    getval:(state,action) => {
state.temp = action.payload
    }
  },

})

// Action creators are generated for each case reducer function
export const { add, sub, mult,div ,getval} = calcSlice.actions

export default calcSlice.reducer