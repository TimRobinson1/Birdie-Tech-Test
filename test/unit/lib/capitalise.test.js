/* eslint-env jest */
import capitalise from '../../../src/lib/capitalise'

describe('Capitalise', () => {
  describe('when the string starts with a letter', () => {
    it('capitalises the first character', () => {
      expect(capitalise('hello')).toEqual('Hello')
    })

    it('does not affect already capitalised strings', () => {
      expect(capitalise('Capital')).toEqual('Capital')
      expect(capitalise('SHOUTING now')).toEqual('SHOUTING now')
    })
  })

  describe('when the string does not start with a letter', () => {
    it('does not affect the string', () => {
      expect(capitalise('123hello')).toEqual('123hello')
    })
  })
})
