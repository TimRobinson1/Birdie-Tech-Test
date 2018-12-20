/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Button from '../../../../src/components/button'

describe('Button', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Button>foo</Button>)
  })

  it('adds `styles` prop to `className`', () => {
    const component = shallowRender((
      <Button styles={fakeAphroditeStyle}>
        foo
      </Button>
    ))
    const props = component.props()
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })

  it('renders its children', () => {
    const component = shallowRender(<Button>foo</Button>)
    expect(component.contains('foo')).toEqual(true)
  })
})
