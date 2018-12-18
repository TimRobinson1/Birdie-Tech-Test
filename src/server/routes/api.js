/* global TableColumns columnData */
// @flow
import express from 'express'
import type { $Request, $Response } from 'express'
import dotenv from 'dotenv'
import getConfig from '../db/config'
import {
  fetchTableColumnNames,
  fetchDataForColumnFromTable
} from '../db/helpers'

dotenv.config()
const config = getConfig()
const router = express.Router()

router.get('/initialise', async (req: $Request, res: $Response): Promise<void> => {
  try {
    // Read column names to display for user to pick from
    const columns: TableColumns = await fetchTableColumnNames({
      TABLE_SCHEMA: config.connection.database,
      TABLE_NAME: config.connection.table
    })

    if (!process.env.INITIAL_COLUMN) {
      // If an initial column has not been specified, fetch nothing and allow
      // the user to choose first
      res.send({
        columns,
        data: {
          rows: [],
          omittedResultCount: 0
        }
      })
    } else {
      const field: string = process.env.INITIAL_COLUMN
      const data: columnData = await fetchDataForColumnFromTable({
        table: config.connection.table,
        columnName: field
      })

      res.send({
        field,
        columns,
        data
      })
    }
  } catch (error) {
    console.error(error)
    return res.send({ error })
  }
})

// The `/data` prefix ensures there's no conflict with the `/initialise` route
router.get('/data/:type', async (req: $Request,res: $Response): Promise<void> => {
  try {
    const {
      rows,
      omittedResultCount
    }: columnData = await fetchDataForColumnFromTable({
      table: config.connection.table,
      columnName: req.params.type
    })

    res.send({ rows, omittedResultCount })
  } catch (error) {
    console.error(error)
    res.send({ error })
  }
})

export default router
