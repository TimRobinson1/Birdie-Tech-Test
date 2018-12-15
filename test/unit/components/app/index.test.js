/* eslint-env jest */
import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { shallowRender, fakeAphroditeStyle } from '../../../helpers'
import App from '../../../../src/components/app'

// Allow accurate shallow rendering of React 16 components
configure({ adapter: new EnzymeAdaptor() })

describe('App', () => {
  beforeEach(() => {
    // Prevent aphrodite from injecting styles as this is only rendered shallowly
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders successfully', () => {
    shallowRender(<App/>)
  })
})
