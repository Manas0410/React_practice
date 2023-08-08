import { configureStore } from '@reduxjs/toolkit'
import storeReducerSlice from './ProductSlice'

export const store = configureStore({
    reducer:{
        storeSlice:storeReducerSlice,}
    })