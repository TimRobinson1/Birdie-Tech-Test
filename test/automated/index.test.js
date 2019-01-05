/* eslint-env jest */
import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import sqlDB from '../../src/server/db'
import getConfig from '../../src/server/db/config'

dotenv.config()
const config = getConfig()

async function setupDatabase () {
  // test data setup
  await sqlDB.seed.run()
}

async function teardownDatabase () {
  // test data teardown
  await sqlDB.schema.dropTableIfExists(config.connection.table)
}

describe('Automated browser tests', () => {
  let browser = null
  let page = null

  beforeEach(async () => {
    // puppeteer setup
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await setupDatabase()
  })

  afterEach(async () => {
    // puppeteer teardown
    await browser.close()
    browser = null
    page = null
    // test data teardown
    await teardownDatabase()
  })

  afterAll(() => sqlDB.destroy())

  describe('when the server errors', () => {
    it('renders an error notification', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
      await page.click('#notification-dismiss')

      // Drop table to cause db to error when queried
      await sqlDB.schema.dropTableIfExists(process.env.DB_TABLE_NAME)

      await page.select('#select-column', 'Marital status')
      await page.waitFor('#notification')

      const notification = await page.$eval('#notification-text', notification => {
        return notification.innerText
      })

      expect(notification).toEqual('Something went wrong while fetching "Marital status" data')
    })
  })

  describe('when a default field is not specified or selected', () => {
    it('renders an info notification', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })

      const notification = await page.$eval('#notification-text', notification => {
        return notification.innerText
      })

      expect(notification).toEqual('Please select a column to start displaying data')
    })

    it('allows the user to dismiss the notification', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })

      const initialNotification = await page.$('#notification')
      await page.click('#notification-dismiss')
      const dismissedNotification = await page.$('#notification')

      expect(initialNotification).not.toBeNull()
      expect(dismissedNotification).toBeNull()
    })
  })

  describe('when user selects a field', () => {
    it('fetches and renders a data table', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
      const tablePriorToFetchingData = await page.$('#data-table')
      await page.select('#select-column', 'Sex')
      await page.waitFor('#data-table')

      const tableWithData = await page.$('#data-table')

      expect(tablePriorToFetchingData).toBe(null)
      expect(tableWithData).not.toBe(null)
    })

    it('renders the data sorted by decreasing order', async () => {
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
      await page.select('#select-column', 'Sex')
      await page.waitFor('#data-table')

      const tableBody = await page.$('tbody')
      const rows = await tableBody.$$('tr')
      const orderedData = await Promise.all(
        rows.map(row => row.$$eval('td', nodes => {
          return nodes.map(node => node.innerText)
        }))
      )

      expect(orderedData).toEqual([
        [ '1', 'Male', '5', '28.4' ],
        [ '2', 'Female', '4', '48.75' ],
        [ '3', 'Other', '1', '59' ]
      ])
    })
  })
})
