import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import watchAddNumRequest from "../features/Calculator/Calculator.Saga";
import MoviesSlice from "../ReduxSaga/Movies/movies.slice";
import calculatorSlice from "../ReduxSaga/calculatorbySaga/calculator.slice";
import rootSaga from "../ReduxSaga/rootsaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    movies: MoviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);
