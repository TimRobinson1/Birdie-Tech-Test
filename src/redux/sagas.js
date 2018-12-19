/* global */
// @flow
import { takeLatest, call, put, select } from 'redux-saga/effects'

import {
  API_INITIALISE
} from './constants'
import {
  apiInitialiseFailure,
  apiInitialiseSuccess
} from './actions'
import request from '../lib/request'

// This worker saga will make the intialisation call to the API on instructions
// from the listener saga.
export function* initialiseData (): Generator<any, *, *> {
  try {
    const {
      field,
      columns,
      data,
      error
    }: fetchedData = yield call(request, '/api/initialise')

    if (error) {
      const message = error.message || 'Something went wrong while initialising the app!'
      yield put(apiInitialiseFailure(message))
    } else {
      yield put(apiInitialiseSuccess({ data, columns, field }))
    }
  } catch (error) {
    console.error(error)
    yield put(apiInitialiseFailure(message))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga (): Generator<Object, *, *> {
  yield takeLatest(API_INITIALISE, initialiseData)
}
