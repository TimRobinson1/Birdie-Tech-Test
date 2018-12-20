declare module './style.css' {
  declare module.exports: Object;
}

// Signature of an AphroditeCSS generated style object
declare type Style = {
  _len: number,
  _name: string,
  _definition: InlineStyle // from flow-inlinestyle
}
declare type Styles = Style | Array<Styles>

declare type StyleSheetType = {
  [key: string]: Styles
}

declare type mergeStyleSheetsFunction = (any, any) => StyleSheetType

declare type TableStylesType = {
  table?: Styles,
  tableHead?: Styles,
  tableHeaderRow?: Styles,
  tableHeaderNumber?: Styles,
  tableHeader?: Styles,
  tableBody?: Styles,
  tableRow?: Styles,
  tableRowNumber?: Styles
}
