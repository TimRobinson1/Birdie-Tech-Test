/* global columnData TableRowData */
// @flow
import sqlDB from '../index'

type fetchDataForColumnFromTableInput = {
  table: string,
  columnName: string
}

async function fetchDataForColumnFromTable ({
  table,
  columnName
}: fetchDataForColumnFromTableInput): Promise<columnData> {
  const rows: Array<TableRowData> = await sqlDB(table)
    .select(
      // SQL_CALC_FOUND_ROWS can be used to efficiently fetch the total number of rows that were retrieved
      // This figure can then be retrieved using found_rows() as seen below if necessary
      sqlDB.raw('SQL_CALC_FOUND_ROWS ??', [[ columnName ]]), sqlDB.raw('ROUND(AVG(age), 2) AS averageAge')
    )
    .count({ count: columnName })
    .orderBy('count', 'desc')
    .groupBy(columnName)
    .limit(100)

  let omittedResultCount: number = 0
  if (rows.length === 100) {
    // Read the number of fetched rows and subtract from our 100 result limit to get the
    // total number of omitted results
    const foundRows = await sqlDB.select(sqlDB.raw('found_rows() as totalRowCount'))
    omittedResultCount = foundRows[0].totalRowCount - rows.length
  }

  return { rows, omittedResultCount }
}

export default fetchDataForColumnFromTable
