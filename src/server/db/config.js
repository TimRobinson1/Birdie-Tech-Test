import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const config = {
  test: {
    client: 'mysql',
    connection: {
      host: process.env.TEST_DB_HOST,
      user: process.env.TEST_DB_USER,
      port: process.env.TEST_DB_PORT,
      password: process.env.TEST_DB_PASSWORD,
      database: process.env.TEST_DB_NAME,
      table: process.env.TEST_DB_TABLE
    },
    seeds: {
      // For seeding the database during testing
      directory: path.join(__dirname, '/seeds/test')
    }
  },
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DEVELOPMENT_DB_HOST,
      user: process.env.DEVELOPMENT_DB_USER,
      port: process.env.DEVELOPMENT_DB_PORT,
      password: process.env.DEVELOPMENT_DB_PASSWORD,
      database: process.env.DEVELOPMENT_DB_NAME,
      table: process.env.DEVELOPMENT_DB_TABLE
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      table: process.env.DB_TABLE
    }
  }
}

export default function getConfig () {
  const environment = process.env.ENVIRONMENT || 'development'
  return config[environment]
}
