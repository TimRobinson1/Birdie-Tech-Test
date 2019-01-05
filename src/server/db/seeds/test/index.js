// @flow

import dotenv from 'dotenv'
import seedData from '../seed-data'

dotenv.config()

export function seed (knex: Function): Promise<*> {
  const tableName = process.env.TEST_DB_TABLE
  return knex.schema.dropTableIfExists(tableName).then((): Promise<*> => {
    return knex.schema.createTable(tableName, (table: Object): void => {
      table.string('marital status').notNullable()
      table.string('sex').notNullable()
      table.integer('age').unsigned().notNullable()
    })
  })
  .then((): Promise<*> => knex(tableName).insert(seedData))
}
