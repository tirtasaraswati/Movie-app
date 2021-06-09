import * as types from "../../config/actionType";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import action from "../../redux/App/action";
import { GET, POST, PUT, DELETE } from "../../config/api";

const { setLoader } = action;
const getState = (state) => state.App;
const BASE_URL_API = "http://www.omdbapi.com/?apikey=faf7e5bb&s=";

export function* getMovie() {
  try {
    yield put(setLoader(true));
    const state = yield select(getState);
    let data = [];
    data = yield call(GET, BASE_URL_API + "to", {});

    if (data.Response === true) {
      data.Search.map((obj, idx) => {
        return (obj["key"] = idx + 1);
      });
    } else {
      data.Search = [];
    }
    yield put({
      type: types.GET_MOVIE_SUCCESS,
      payload: data.Search,
    });
    yield put(setLoader(false));
  } catch (error) {
    console.log("error : ", error);
    yield put(setLoader(false));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_MOVIE, getMovie)]);
}
