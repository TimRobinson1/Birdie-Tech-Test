/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Notification from '../../../../src/components/notification'

const notification = { type: 'info', message: 'yep' }

describe('Notification', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Notification notification={notification} />)
  })

  it('it does not render if no notification is provided', () => {
    const component = shallowRender(<Notification />)
    expect(component.html()).toEqual(null)
  })

  it('adds `styles` prop to `className`', () => {
    const component = shallowRender((
      <Notification notification={notification} styles={fakeAphroditeStyle} />
    ))
    const props = component.props()
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })
})
