import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

import { fetchHomeSaga } from './home';

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME, fetchHomeSaga);
}
