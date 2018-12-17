/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Header from '../../../../src/components/header'

describe('Header', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Header>foo</Header>)
  })

  it('adds `styles` prop to `className`', () => {
    const component = shallowRender((
      <Header styles={fakeAphroditeStyle}>
        foo
      </Header>
    ))
    const props = component.props()
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })

  it('renders its children', () => {
    const component = shallowRender(<Header>foo</Header>)
    expect(component.contains('foo')).toEqual(true)
  })
})
