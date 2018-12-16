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
