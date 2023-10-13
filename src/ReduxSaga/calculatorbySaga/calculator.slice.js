import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  sum: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      console.log("call", action.payload);
      state.isLoading = true;
    },
    requestSuccess: (state, action) => {
      state.isLoading = false;
      console.log({ action });
      state.sum = action.payload.sum;
    },
    requestFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addRequest, requestFailure, requestSuccess } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
