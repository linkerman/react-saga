import { put } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../actions';

export function* fetchHomeSaga(action) {
  try {
    const response = yield axios.get('https://api.covid19api.com/summary');
    console.log(response.data.Global);
    yield put(actions.fetchHomeSuccess(response.data.Global));
  } catch (error) {
    yield put(actions.fetchHomeFail(error));
  }
}
