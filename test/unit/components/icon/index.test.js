/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Icon from '../../../../src/components/icon'

describe('Icon', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  describe('when `name` prop is provided', () => {
    it('renders', () => {
      shallowRender(<Icon name='chevron' />)
    })

    it('adds `styles` prop to `className`', () => {
      const component = shallowRender((
        <Icon name='chevron' styles={fakeAphroditeStyle} />
      ))
      const props = component.props()
      expect(props.className).toContain(fakeAphroditeStyle._name)
    })
  })

  describe('when `name` prop is incorrect or not provided', () => {
    it('throws an error', () => {
      expect(() => {
        shallowRender(<Icon name='super-bad-icon-name' />)
      }).toThrowError('Invalid icon name "super-bad-icon-name"')
    })
  })
})
