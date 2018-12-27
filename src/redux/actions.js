/* global Action TableRowData */
// @flow
import {
  API_INITIALISE_SUCCESS,
  API_INITIALISE_FAILURE,
  FETCH_COLUMN_STATISTICS_SUCCESS,
  FETCH_COLUMN_STATISTICS_FAILURE,
  SHOW_NOTIFICATION
} from './constants'

type apiInitialiseSuccessPayload = {
  data: {
    rows: Array<TableRowData>,
    omittedResultCount: number
  },
  columns?: TableColumns,
  field?: string
}

type fetchColumnStatisticsSuccessPayload = {
  columnName: string,
  statisticsData: Array<TableRowData>,
  omittedResultCount: number
}

// The API has failed to fetch the initial set of data
function apiInitialiseFailure (message: string): Action {
  return {
    type: API_INITIALISE_FAILURE,
    notification: { type: 'error', message }
  }
}

// The API has just finished fetching the first set of data
function apiInitialiseSuccess (
  { data, columns, field }: apiInitialiseSuccessPayload
): Action {
  return {
    type: API_INITIALISE_SUCCESS,
    statisticsData: data.rows,
    omittedResultCount: data.omittedResultCount,
    columns,
    field
  }
}

// The API has just failed to fetch data on a column
function fetchColumnStatisticsFailure (message: string): Action {
  return {
    type: FETCH_COLUMN_STATISTICS_FAILURE,
    notification: { type: 'error', message }
  }
}

// The API has just fetched data on a column
function fetchColumnStatisticsSuccess (
  { columnName, statisticsData, omittedResultCount }: fetchColumnStatisticsSuccessPayload
): Action {
  return {
    type: FETCH_COLUMN_STATISTICS_SUCCESS,
    field: columnName,
    statisticsData,
    omittedResultCount
  }
}

// For when a notification needs to be displayed to the user
function showNotification (notification: NotificationType): Action {
  return {
    type: SHOW_NOTIFICATION,
    notification
  }
}

export {
  showNotification,
  apiInitialiseFailure,
  apiInitialiseSuccess,
  fetchColumnStatisticsFailure,
  fetchColumnStatisticsSuccess
}
