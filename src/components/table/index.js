/* global mergeStyleSheetsFunction StyleSheetType ID TableStylesType TableRowData */
// @flow
import * as React from 'react'
import memoizeOne from 'memoize-one'
import defaultStyles from './style.css'
import mergeStyleSheets from '../../lib/merge-style-sheets'
import { css } from '../../lib/styles'

type TableProps = {
  id?: ID,
  data: Array<TableRowData>,
  headers: Array<TableHeaderData>,
  styleSheet?: TableStylesType
}

const getStyles: mergeStyleSheetsFunction = memoizeOne(mergeStyleSheets)

const Table = ({
  id,
  data,
  headers,
  styleSheet: overridingStyles
}: TableProps): React.Node => {
  const styles: StyleSheetType = getStyles(defaultStyles, overridingStyles)

  return (
    <table id={id} className={css(styles.table)}>
      <thead className={css(styles.tableHead)}>
        <tr className={css(styles.tableHeaderRow)}>
          <th className={css(styles.tableHeaderNumber)}>
            #
          </th>
          {headers.map((header: TableHeaderData): React.Node => (
            <th className={css(styles.tableHeader)} key={`head-${header.key}`}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={css(styles.tableBody)}>
        {data.map((rowData: TableRowData, index: number): React.Node => (
          <tr
            id={`table-row-${index}`}
            className={css(styles.tableRow)}
            key={`table-row-${index}`}
          >
            <td
              id='table-row-number'
              data-label='#'
              className={css(styles.tableRowNumber)}
            >
              {index + 1}
            </td>
            {headers.map((header: TableHeaderData): React.Node => (
              // Map column data to the appropriate header to display
              <td
                className={css(styles.tableCell)}
                data-label={header.label}
                key={`body-${header.label}`}
              >
                {rowData[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  data: [],
  headers: [],
  styleSheet: {}
}

export default Table
