import { all } from "redux-saga/effects";
import AppSagas from "./App/saga";

export default function* rootSaga(getState) {
  yield all([AppSagas()]);
}
