/* global State */
// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { Dispatch as DispatchType } from 'redux'
import {
  API_INITIALISE
} from '../redux/constants'

function mapStateToProps (state: State): State {
  return {
    loading: state.loading
  }
}

function mapDispatchToProps (dispatch: DispatchType) {
  return {
    initialiseData: () => dispatch({ type: API_INITIALISE })
  }
}

export default function connectComponentToState (Component: React.ComponentType<*>) {
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
