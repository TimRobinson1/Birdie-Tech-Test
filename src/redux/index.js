/* global State Action */
// @flow
import {
  API_INITIALISE,
  API_INITIALISE_SUCCESS,
API_INITIALISE_FAILURE,
} from './constants'

export const initialState: State = {
  loading: false,
  statisticsData: [],
  columns: [],
  field: '',
  omittedResultCount: 0,
  notification: null
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
    case API_INITIALISE_FAILURE:
      return { ...state, loading: false, notification: action.notification }
    default:
      return state
  }
}

export default reducer
