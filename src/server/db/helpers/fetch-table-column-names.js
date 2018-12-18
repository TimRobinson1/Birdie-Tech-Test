/* global TableColumns */
// @flow
import sqlDB from '../index'

type fetchTableColumnNamesInput = {
  TABLE_NAME: string,
  TABLE_SCHEMA: string
}

function fetchTableColumnNames ({
  TABLE_SCHEMA,
  TABLE_NAME
}: fetchTableColumnNamesInput): Promise<TableColumns> {
  // Fetches all of the column names from a specific table
  return sqlDB('information_schema.columns')
    .select({ columnName: 'COLUMN_NAME' })
    .where({ TABLE_SCHEMA, TABLE_NAME })
}

export default fetchTableColumnNames
