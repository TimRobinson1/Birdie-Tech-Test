/* global Action TableRowData */
// @flow
import {
  API_INITIALISE_SUCCESS,
  API_INITIALISE_FAILURE
} from './constants'

type apiInitialiseSuccessPayload = {
  data: {
    rows: Array<TableRowData>,
    omittedResultCount: number
  },
  columns?: TableColumns,
  field?: string
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

export {
  apiInitialiseFailure,
  apiInitialiseSuccess
}
