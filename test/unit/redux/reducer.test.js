/* eslint-env jest */
import reducer, { initialState } from '../../../src/redux'
import * as types from '../../../src/redux/constants'

describe('Redux reducer', () => {
  it('should return initialState as default behaviour', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle type `API_INITIALISE` correctly', () => {
    const action = {
      type: types.API_INITIALISE
    }
    expect(reducer({ loading: false }, action)).toEqual({
      loading: true,
      notification: null
    })
  })

  it('should handle type `API_INITIALISE_SUCCESS` correctly', () => {
    const action = {
      type: types.API_INITIALISE_SUCCESS,
      statisticsData: [{ testData: 'yes' }],
      omittedResultCount: 0,
      columns: [{}],
      field: 'no'
    }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      statisticsData: [{ testData: 'yes' }],
      omittedResultCount: 0,
      columns: [{}],
      field: 'no'
    })
  })

  it('should handle type `FETCH_COLUMN_STATISTICS` correctly', () => {
    const action = {
      type: types.FETCH_COLUMN_STATISTICS,
      columnName: 'dave'
    }
    expect(reducer({ columnName: 'phil' }, action)).toEqual({
      loading: true,
      notification: null,
      columnName: 'dave'
    })
  })

  it('should handle type `FETCH_COLUMN_STATISTICS_SUCCESS` correctly', () => {
    const action = {
      type: types.FETCH_COLUMN_STATISTICS_SUCCESS,
      statisticsData: [{ data: 'test' }],
      omittedResultCount: 0,
      field: 'field'
    }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      loading: false,
      statisticsData: [{ data: 'test' }],
      omittedResultCount: 0,
      field: 'field'
    })
  })

  it('should handle type `FETCH_COLUMN_STATISTICS_FAILURE` correctly', () => {
    const action = {
      type: types.FETCH_COLUMN_STATISTICS_FAILURE,
      notification: {
        type: 'info',
        message: 'Fetching failed'
      }
    }
    expect(reducer({ loading: true, notification: null }, action)).toEqual({
      loading: false,
      notification: action.notification
    })
  })

  it('should handle type `API_INITIALISE_FAILURE` correctly', () => {
    const action = {
      type: types.API_INITIALISE_FAILURE,
      notification: {
        type: 'info',
        message: 'Fetching failed'
      }
    }
    expect(reducer({ loading: true, notification: null }, action)).toEqual({
      loading: false,
      notification: action.notification
    })
  })

  it('should handle type `SHOW_NOTIFICATION` correctly', () => {
    const action = {
      type: types.SHOW_NOTIFICATION,
      notification: {
        type: 'info',
        message: 'Yay!'
      }
    }
    expect(reducer({ notification: null }, action)).toEqual({
      notification: action.notification
    })
  })

  it('should handle type `HIDE_NOTIFICATION` correctly', () => {
    const action = {
      type: types.HIDE_NOTIFICATION
    }
    expect(reducer({ notification: {} }, action)).toEqual({
      notification: null
    })
  })
})
