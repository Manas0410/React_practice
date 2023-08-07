import { configureStore } from '@reduxjs/toolkit'
import calcReducerSlice from './SliceCalc'

export const store = configureStore({
    reducer:{
        calcSlice:calcReducerSlice,}
    })



    // store=>slice=>intialstate inside the slice reducer
    // store goes to provider globally
    // store seems as satate to useselector and search value in it
    // in usedispatch we pass a fxn ki ispe kaam krna
    // reducer is a logic that change data