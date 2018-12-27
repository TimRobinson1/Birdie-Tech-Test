/* eslint-env jest */
import * as actions from '../../../src/redux/actions'
import * as types from '../../../src/redux/constants'

describe('Redux actions', () => {
  describe('apiInitialiseFailure', () => {
    it('should create an action to display an error notification', () => {
      const message = 'Oh no!'
      const result = actions.apiInitialiseFailure(message)
      expect(result).toEqual({
        type: types.API_INITIALISE_FAILURE,
        notification: {
          type: 'error',
          message
        }
      })
    })
  })

  describe('apiInitialiseSuccess', () => {
    it('should create an action to intialise the app with data', () => {
      const result = actions.apiInitialiseSuccess({
        data: { rows: [], omittedResultCount: 0 },
        columns: [{}],
        field: 'field'
      })
      expect(result).toEqual({
        type: types.API_INITIALISE_SUCCESS,
        statisticsData: [],
        omittedResultCount: 0,
        columns: [{}],
        field: 'field'
      })
    })
  })

  describe('fetchColumnStatisticsFailure', () => {
    it('should create an action to display an error notification', () => {
      const message = 'Oh no!'
      const result = actions.fetchColumnStatisticsFailure(message)
      expect(result).toEqual({
        type: types.FETCH_COLUMN_STATISTICS_FAILURE,
        notification: {
          type: 'error',
          message
        }
      })
    })
  })

  describe('fetchColumnStatisticsSuccess', () => {
    it('should create an action to provide the app with data', () => {
      const result = actions.fetchColumnStatisticsSuccess({
        columnName: 'string',
        statisticsData: [],
        omittedResultCount: 0
      })
      expect(result).toEqual({
        type: types.FETCH_COLUMN_STATISTICS_SUCCESS,
        statisticsData: [],
        omittedResultCount: 0,
        field: 'string'
      })
    })
  })

  describe('showNotification', () => {
    it('should create an action to display a notification', () => {
      const notification = {
        type: 'info',
        message: 'This is a test'
      }
      const result = actions.showNotification(notification)
      expect(result).toEqual({
        type: types.SHOW_NOTIFICATION,
        notification
      })
    })
  })
})
