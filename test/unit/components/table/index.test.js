/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Table from '../../../../src/components/table'

describe('Table', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Table />)
  })

  it('merges `styleSheet` prop styles with default styles', () => {
    const component = shallowRender((
      <Table
        styleSheet={{
          table: fakeAphroditeStyle
        }}
      />
    ))
    const props = component.props()
    expect(props.className).toContain('table')
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })
})
