/* eslint-env jest */
import mergeStyleSheets from '../../../src/lib/merge-style-sheets'

describe('mergeStyleSheets', () => {
  it('combines the classnames from the given stylesheets', () => {
    const styleSheetOne = { onlyOnFirst: 'tableStyles', onBoth: 'headerStyles' }
    const styleSheetTwo = { onlyOnSecond: 'navStyles', onBoth: 'headerStyleOverride' }
    expect(mergeStyleSheets(styleSheetOne, styleSheetTwo)).toEqual({
      onlyOnFirst: [ 'tableStyles' ],
      onlyOnSecond: [ 'navStyles' ],
      onBoth: [ 'headerStyles', 'headerStyleOverride' ]
    })
  })

  it('removes falsy values from the combined stylesheet', () => {
    const styleSheetOne = { first: undefined, onBoth: 'headerStyles' }
    const styleSheetTwo = { first: 'navStyles', onBoth: 'headerStyleOverride' }
    expect(mergeStyleSheets(styleSheetOne, styleSheetTwo)).toEqual({
      first: [ 'navStyles' ],
      onBoth: [ 'headerStyles', 'headerStyleOverride' ]
    })
  })
})
