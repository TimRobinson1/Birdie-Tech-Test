/* eslint-env jest */
import noop from '../../../src/lib/noop'

describe('No-op', () => {
  it('is a function', () => {
    expect(typeof noop).toEqual('function')
  })

  it('returns undefined when called', () => {
    expect(noop()).toBeUndefined()
    expect(noop(1)).toBeUndefined()
    expect(noop('args', 'additionalArgs')).toBeUndefined()
  })
})
