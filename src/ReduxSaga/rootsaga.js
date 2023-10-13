import { all, fork } from "redux-saga/effects";
import watchAddNumRequest from "./calculatorbySaga/calculator.saga";
import watchGetMoviesRequest from "./Movies/movies.saga";

export default function* rootSaga() {
  yield all([fork(watchGetMoviesRequest), fork(watchAddNumRequest)]);
}
