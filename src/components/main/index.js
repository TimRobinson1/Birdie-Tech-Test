/* global EventObject TableHeaderData TableColumns */
// @flow
import * as React from 'react'
import capitalise from '../../lib/capitalise'
import Table from '../table'
import Select from '../select'
import Text from '../text'
import styles from './style.css'
import { css } from '../../lib/styles'

type MainProps = {
  field: string,
  columns: TableColumns,
  omittedResultCount: number,
  statisticsData: Array<TableRowData>,
  fetchColumnStatistics: (string) => void
}

const TableStyleSheet: TableStylesType = {
  table: styles.table,
  tableHeaderRow: styles.tableHeaderRow,
  tableRow: styles.tableRow,
  tableRowNumber: styles.tableRowNumber
}

class Main extends React.Component<MainProps> {
  onChangeColumn = (event: EventObject): void => {
    event.stopPropagation()
    this.props.fetchColumnStatistics(event.target.value)
  }

  render (): React.Node {
    const {
      statisticsData = [],
      omittedResultCount,
      field,
      columns
    } = this.props

    const tableHeaders: Array<TableHeaderData> = [
      {
        label: capitalise(field),
        key: field
      },
      {
        label: 'Count',
        key: 'count'
      },
      {
        label: 'Average age',
        key: 'averageAge'
      }
    ]

    return (
      <main className={css(styles.pageContainer)}>
        <div className={css(styles.infoSectionsContainer)}>
          <div className={css(styles.selectContainer)}>
            <Text>
              Select a category to display the top 100 results for that column.
            </Text>
            <Select
              id='select-column'
              value={capitalise(field)}
              onChange={this.onChangeColumn}
              styleSheet={{
                selectContainer: styles.selectContainer
              }}
              placeholder='Select a column'
            >
              {columns.map(({ columnName }) => (
                <option key={columnName}>{capitalise(columnName)}</option>
              ))}
            </Select>
          </div>
          <div className={css(styles.statisticsContainer)}>
            <Text bold>
              Displayed results: {statisticsData.length}
            </Text>
            <Text bold>
              Omitted Results: {omittedResultCount}
            </Text>
          </div>
        </div>
        {!!statisticsData.length && (
          <Table
            id='data-table'
            headers={tableHeaders}
            data={statisticsData}
            styleSheet={TableStyleSheet}
          />
        )}
      </main>
    )
  }
}

export default Main
