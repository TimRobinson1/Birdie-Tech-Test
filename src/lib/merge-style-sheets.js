/* global StyleSheetType Styles */
// @flow
function mergeStyleSheets (
  primaryStyleSheet: StyleSheetType,
  styleSheetOverride: StyleSheetType
): StyleSheetType {
  const stylesheets: Array<StyleSheetType> = [primaryStyleSheet, styleSheetOverride]
  const keys: Array<string> = Object.keys(
    Object.assign({}, primaryStyleSheet, styleSheetOverride)
  )

  return keys.reduce((classList: StyleSheetType, className: string) => {
    const classes: Styles = stylesheets
      .map((sheet: StyleSheetType): Styles => sheet[className])
      .filter(Boolean) // Remove falsy values

    classList[className] = classes

    return classList
  }, {})
}

export default mergeStyleSheets
