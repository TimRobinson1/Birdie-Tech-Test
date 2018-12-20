declare type ID = string | number

declare type EventObject = {
  preventDefault: (void) => void,
  stopPropagation: (void) => void,
  target: {
    value: string
  }
}

declare type noopFunction = (any) => void
declare type onEventFunction = (EventObject) => void

declare type State = {
  loading: boolean,
  statisticsData: Array<TableRowData>,
  columns: TableColumns,
  notification: NotificationType | null,
  columnName?: string | null,
  field: string,
  omittedResultCount: number
}

declare type Action = {
  type: string,
  statisticsData?: Array<TableRowData>,
  columns?: TableColumns,
  field?: string,
  columnName?: string,
  omittedResultCount?: number,
  notification?: NotificationType
}
