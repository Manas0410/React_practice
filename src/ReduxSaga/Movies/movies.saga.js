import { delay, put, takeLatest } from "redux-saga/effects";
import {
  GET_MOVIES_REQUEST,
  getMoviesRequestFailed,
  getMoviesRequestSuccess,
} from "./movies.slice";

const getAPI = async (url) => {
  try {
    const result = await fetch(url);
    const parsedJSON = await result.json();
    return parsedJSON;
  } catch (err) {
    return [];
  }
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMovies() {
  try {
    yield delay(3000);
    const results = yield getAPI(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    );

    console.log("Movies: ", results);
    yield put(getMoviesRequestSuccess({ results }));
  } catch (e) {
    console.log("Actions Error: ", e);
    yield put(getMoviesRequestFailed({ sum: 0 }));
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* watchGetMoviesRequest() {
  yield takeLatest(GET_MOVIES_REQUEST, fetchMovies);
}

export default watchGetMoviesRequest;
