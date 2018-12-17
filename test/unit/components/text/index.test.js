/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Text from '../../../../src/components/text'

describe('Text', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Text>foo</Text>)
  })

  it('adds `styles` prop to `className`', () => {
    const component = shallowRender((
      <Text styles={fakeAphroditeStyle}>
        foo
      </Text>
    ))
    const props = component.props()
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })

  it('renders its children', () => {
    const component = shallowRender(<Text>foo</Text>)
    expect(component.contains('foo')).toEqual(true)
  })
})
