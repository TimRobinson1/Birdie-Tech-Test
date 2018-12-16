/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Navbar from '../../../../src/components/navbar'

describe('Navbar', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Navbar>foo</Navbar>)
  })

  it('renders its children', () => {
    const component = shallowRender(<Navbar>foo</Navbar>)
    expect(component.contains('foo')).toEqual(true)
  })
})
