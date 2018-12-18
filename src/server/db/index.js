// @flow
import knex from 'knex'
import getConfig from './config'

export default knex(getConfig())
