/* eslint-env jest */
import { call, put, select } from 'redux-saga/effects'
import request from '../../../src/lib/request'
import {
  initialiseData,
  fetchColumnStatistics,
  conditionallyDisplayUserPrompt
} from '../../../src/redux/sagas'
import * as actions from '../../../src/redux/actions'

describe('Redux-Saga', () => {
  describe('initialiseData', () => {
    const fetchedData = {
      field: 'field1',
      columns: [],
      data: {}
    }

    it('should call the initialise endpoint', () => {
      const generator = initialiseData()
      expect(
        generator.next().value
      ).toEqual(
        call(request, '/api/initialise')
      )
    })

    describe('on success', () => {
      it('should trigger the apiInitialiseSuccess action', () => {
        const generator = initialiseData()
        generator.next().value

        expect(
          generator.next(fetchedData).value
        ).toEqual(
          put(actions.apiInitialiseSuccess(fetchedData))
        )
      })
    })

    describe('on failure', () => {
      it('should trigger the apiInitialiseFailure action', () => {
        const error = new Error('Broken!')
        const generator = initialiseData()
        generator.next().value

        expect(
          generator.next({ error }).value
        ).toEqual(
          put(actions.apiInitialiseFailure(error.message))
        )
      })
    })
  })

  describe('fetchColumnStatistics', () => {
    it('should fetch the statistics for a given column', () => {
      const generator = fetchColumnStatistics()
      generator.next().value

      expect(
        generator.next('testing').value
      ).toEqual(
        call(request, '/api/data/testing')
      )
    })

    describe('on success', () => {
      it('should trigger the fetchColumnStatisticsSuccess action', () => {
        const generator = fetchColumnStatistics()
        generator.next().value
        generator.next('testing').value

        expect(
          generator.next({ rows: [], omittedResultCount: 0 }).value
        ).toEqual(
          put(actions.fetchColumnStatisticsSuccess({
            statisticsData: [],
            omittedResultCount: 0,
            columnName: 'testing'
          }))
        )
      })
    })

    describe('on failure', () => {
      it('should trigger the fetchColumnStatisticsSuccess action', () => {
        const error = new Error('Broken!')
        const generator = fetchColumnStatistics()
        generator.next().value
        generator.next('testing').value

        expect(
          generator.next({ error }).value
        ).toEqual(
          put(actions.fetchColumnStatisticsFailure(error.message))
        )
      })
    })
  })

  describe('conditionallyDisplayUserPrompt', () => {
    describe('when a field has not been selected', () => {
      it('should trigger a notification', () => {
        const generator = conditionallyDisplayUserPrompt()
        generator.next().value

        expect(
          generator.next(null).value
        ).toEqual(
          put(actions.showNotification({
            type: 'info',
            message: 'Please select a column to start displaying data'
          }))
        )
      })
    })

    describe('when a field has been selected', () => {
      it('should trigger a notification', () => {
        const generator = conditionallyDisplayUserPrompt()
        generator.next().value

        expect(
          generator.next('field').value
        ).not.toEqual(
          put(actions.showNotification({
            type: 'info',
            message: 'Please select a column to start displaying data'
          }))
        )
      })
    })
  })
})
