import { all, fork } from 'redux-saga/effects';

import counter from './counter';

export default function* root() {
  yield all([fork(counter)]);
}
