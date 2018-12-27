/* global State Action */
// @flow
import {
  API_INITIALISE,
  API_INITIALISE_SUCCESS,
  API_INITIALISE_FAILURE,
  FETCH_COLUMN_STATISTICS,
  FETCH_COLUMN_STATISTICS_SUCCESS,
  FETCH_COLUMN_STATISTICS_FAILURE,
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION
} from './constants'

export const initialState: State = {
  loading: false,
  statisticsData: [],
  columns: [],
  notification: null,
  columnName: null,
  field: '',
  omittedResultCount: 0
}

function reducer (state: State = initialState, action: Action): State {
  switch (action.type) {
    case API_INITIALISE:
      return { ...state, loading: true, notification: null }
    case API_INITIALISE_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticsData: action.statisticsData,
        omittedResultCount: action.omittedResultCount,
        columns: action.columns,
        field: action.field
      }
    case FETCH_COLUMN_STATISTICS:
      // Set notification to `null` so that it is removed when more data fetching is underway
      return { ...state, loading: true, notification: null, columnName: action.columnName }
    case FETCH_COLUMN_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticsData: action.statisticsData,
        omittedResultCount: action.omittedResultCount,
        field: action.field
      }
    case FETCH_COLUMN_STATISTICS_FAILURE:
    case API_INITIALISE_FAILURE:
      return { ...state, loading: false, notification: action.notification }
    case SHOW_NOTIFICATION:
      return { ...state, notification: action.notification }
    case HIDE_NOTIFICATION:
      return { ...state, notification: null }

    default:
      return state
  }
}

export default reducer
