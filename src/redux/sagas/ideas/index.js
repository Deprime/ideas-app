import { apply, call, put, takeEvery } from "redux-saga/effects";
import ideaApi from "@/api/ideaApi";
import {
  LOAD_IDEAS, LOAD_IDEAS_FAILURE, LOAD_IDEAS_SUCCESS,
  CREATE_IDEA, CREATE_IDEA_SUCCESS, CREATE_IDEA_FAILURE,
  UPDATE_IDEA, UPDATE_IDEA_SUCCESS, UPDATE_IDEA_FAILURE,
  DELETE_IDEA, DELETE_IDEA_SUCCESS, DELETE_IDEA_FAILURE,
  RESTORE_IDEA, RESTORE_IDEA_SUCCESS, RESTORE_IDEA_FAILURE,
} from "../../reducers/idea/actions";

export function* loadIdea() {}

export function* loadIdeaList({ payload }) {
  const { page } = payload;
  try {
    const result = yield call(ideaApi.list, page);
    const data = result;
    yield put({
      type: LOAD_IDEAS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: LOAD_IDEAS_FAILURE
    });
  }
}

export function* createIdea({ payload }) {
  try {
    const result = yield call(ideaApi.create, payload);
    const data = result;
    yield put({
      type: CREATE_IDEA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error)
    yield put({
      type: CREATE_IDEA_FAILURE,
    });
  }
}

export function* updateIdea({ payload }) {
  try {
    const result = yield call(ideaApi.update, payload);
    const data = result;
    yield put({
      type: UPDATE_IDEA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_IDEA_FAILURE
    });
  }
}

export function* deleteIdea({ payload }) {
  const { id } = payload;
  try {
    const result = yield call(ideaApi.remove, id);
    const data = result;
    yield put({
      type: DELETE_IDEA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: DELETE_IDEA_FAILURE
    });
  }
}

export function* restoreIdea({ payload }) {
  const { id } = payload;
  try {
    const result = yield call(ideaApi.restore, id);
    const data = result;
    yield put({
      type: RESTORE_IDEA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: RESTORE_IDEA_FAILURE
    });
  }
}

// export function* loadIdeaListOnInit

export default function* ideasSaga() {
  yield takeEvery(LOAD_IDEAS, loadIdeaList);
  yield takeEvery(CREATE_IDEA, createIdea);
  yield takeEvery(UPDATE_IDEA, updateIdea);
  yield takeEvery(DELETE_IDEA, deleteIdea);
  yield takeEvery(RESTORE_IDEA, restoreIdea);
}
