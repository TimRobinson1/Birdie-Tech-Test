/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import Select from '../../../../src/components/select'

const option = (<option value="">foo</option>)

describe('Select', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders', () => {
    shallowRender(<Select>{option}</Select>)
  })

  it('merges `styleSheet` prop styles with default styles', () => {
    const component = shallowRender((
      <Select
        styleSheet={{
          selectContainer: fakeAphroditeStyle
        }}
      >
        {option}
      </Select>
    ))
    const props = component.props()
    expect(props.className).toContain('selectContainer')
    expect(props.className).toContain(fakeAphroditeStyle._name)
  })

  it('renders its children', () => {
    const component = shallowRender(<Select>{option}</Select>)
    expect(component.contains(option)).toEqual(true)
  })
})
