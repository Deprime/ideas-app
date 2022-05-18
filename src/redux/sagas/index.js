import { all, spawn } from "redux-saga/effects";
import ideasSaga from "./ideas";

export default function* rootSaga() {
  const sagas = [
    ideasSaga,
  ];

  yield all(sagas.map(saga => spawn(saga)));
}
