import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: null,
  loadingState: "idle",
};

// Action constants
export const GET_MOVIES_REQUEST = "movies/getMoviesRequest";
export const GET_MOVIES_REQUEST_SUCCESS = "movies/getMoviesRequestSuccess";
export const GET_MOVIES_REQUEST_FAILED = "movies/getMoviesRequestFailed";

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesRequest: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loadingState = "loading";
    },
    getMoviesRequestSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loadingState = "completed";
      state.results = action.payload.results;
      console.log("Actions inside success: ", action);
      // Attach result in state
    },
    getMoviesRequestFailed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loadingState = "error";
      state.results = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getMoviesRequest,
  getMoviesRequestFailed,
  getMoviesRequestSuccess,
} = moviesSlice.actions;

export default moviesSlice.reducer;
