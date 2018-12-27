/* global fetchedData */
// @flow
import { takeLatest, call, put, select } from 'redux-saga/effects'
import request from '../lib/request'
import {
  showNotification,
  apiInitialiseFailure,
  apiInitialiseSuccess,
  fetchColumnStatisticsFailure,
  fetchColumnStatisticsSuccess
} from './actions'
import {
  API_INITIALISE,
  API_INITIALISE_SUCCESS,
  FETCH_COLUMN_STATISTICS
} from './constants'

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

  }
}

// This worker saga will make the appropriate call to the API
export function* fetchColumnStatistics (): Generator<any, *, *> {
  const columnName: string = yield select(state => state.columnName)
  const {
    error,
    omittedResultCount,
    rows: statisticsData
  }: {
    error?: Error,
    omittedResultCount: number,
    rows: Array<TableRowData>
  } = yield call(request, `/api/data/${columnName}`)

  if (error) {
    const message: string = error.message || `Something went wrong while fetching "${columnName}" data`
    yield put(fetchColumnStatisticsFailure(message))
  } else {
    yield put(fetchColumnStatisticsSuccess({
      columnName,
      statisticsData,
      omittedResultCount
    }))
  }
}

// If the user has not provided an initial field for the app to render with,
// show them a notification suggesting that they pick a column.
export function* conditionallyDisplayUserPrompt (): Generator<Object, *, *> {
  const field: string = yield select(state => state.field)

  if (!field) {
    yield put(showNotification({
      type: 'info',
      message: 'Please select a column to start displaying data'
    }))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga (): Generator<Object, *, *> {
  yield takeLatest(API_INITIALISE, initialiseData)
  yield takeLatest(API_INITIALISE_SUCCESS, conditionallyDisplayUserPrompt)
  yield takeLatest(FETCH_COLUMN_STATISTICS, fetchColumnStatistics)
}
