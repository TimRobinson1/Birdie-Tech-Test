/* global State */
// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { Dispatch as DispatchType } from 'redux'
import {
  API_INITIALISE,
  FETCH_COLUMN_STATISTICS,
  HIDE_NOTIFICATION
} from '../redux/constants'

function mapStateToProps (state: State): State {
  return {
    loading: state.loading,
    statisticsData: state.statisticsData,
    omittedResultCount: state.omittedResultCount,
    field: state.field,
    columns: state.columns,
    notification: state.notification
  }
}

function mapDispatchToProps (dispatch: DispatchType) {
  return {
    initialiseData: () => dispatch({ type: API_INITIALISE }),
    fetchColumnStatistics: (columnName: string) => dispatch({ type: FETCH_COLUMN_STATISTICS, columnName }),
    dismissNotification: () => dispatch({ type: HIDE_NOTIFICATION })
  }
}

export default function connectComponentToState (Component: React.ComponentType<*>) {
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
