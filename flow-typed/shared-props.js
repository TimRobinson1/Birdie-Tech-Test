declare type IconProps = {
  className: string
}

type NotificationType = {
  type: 'error' | 'info',
  message: string
}

type TableHeaderData = {
  label: string,
  key: string
}

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

declare type IconNames = 'chevron' | 'github' | 'warning' | 'info'
