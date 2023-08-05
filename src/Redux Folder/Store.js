import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice1'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})