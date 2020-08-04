import { all, put, takeLatest, delay } from 'redux-saga/effects';
import { plus, minus } from '../actions/counter';

export function* increment(action: ReturnType<typeof plus>): Generator {
  yield put({
    type: plus,
    payload: action.payload,
  });
  yield delay(1000);
  yield put({
    type: plus,
    payload: action.payload,
  });
  yield delay(1000);
  yield put({
    type: plus,
    payload: action.payload,
  });
  yield delay(1000);
}

export function* decrement(action: ReturnType<typeof minus>): Generator {
  yield put({
    type: minus,
    payload: action.payload,
  });
  yield delay(1000);
  yield put({
    type: minus,
    payload: action.payload,
  });
  yield delay(1000);
  yield put({
    type: minus,
    payload: action.payload,
  });
  yield delay(1000);
}


export default function* root() {
  yield all([
    takeLatest('INCREMENT_ASYNC', increment),
    takeLatest('DECREMENT_ASYNC', decrement),
  ]);
}
