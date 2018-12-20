/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import LoadingSpinner from '../../../../src/components/loading-spinner'

describe('LoadingSpinner', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('does not render by default', () => {
    const component = shallowRender(<LoadingSpinner />)
    expect(component.html()).toEqual(null)
  })

  it('renders if loading', () => {
    expect(shallowRender(<LoadingSpinner loading={true} />)).toBeTruthy()
  })

  it('adds `styles` prop to `className`', () => {
    const component = shallowRender((
      <LoadingSpinner loading={true} styles={fakeAphroditeStyle} />
    ))
    const props = component.props()
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })
})
