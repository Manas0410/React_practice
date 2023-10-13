import { put, takeLatest } from "redux-saga/effects";
import { requestFailure, requestSuccess } from "./calculator.slice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const { num1, num2 } = action.payload;
    console.log("Actions: ", action);
    const sum = +num1 + +num2;
    console.log(sum);
    //yield delay(5000);
    yield put(requestSuccess({ sum }));
  } catch (e) {
    console.log("Actions Error: ", e);
    yield put(requestFailure({ sum: 0 }));
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* watchAddNumRequest() {
  yield takeLatest("calculator/addRequest", fetchUser);
}

export default watchAddNumRequest;
