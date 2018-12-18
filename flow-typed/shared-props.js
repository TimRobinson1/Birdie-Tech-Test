declare type IconProps = {
  className: string
}

declare type IconNames = 'chevron' | 'github' | 'warning' | 'info'

type TableRowData = {
  [key: string]: string,
  count: number,
  averageAge: number
}

type TableColumns = Array<{ columnName: string }>

declare type fetchedData = {
  field?: string,
  columns?: TableColumns,
  data: {
    rows: Array<TableRowData>,
    omittedResultCount: number
  },
  error?: Error
}

type columnData = {
  rows: Array<TableRowData>,
  omittedResultCount: number
}
