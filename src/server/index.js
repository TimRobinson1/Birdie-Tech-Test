/* global */
// @flow
import '@babel/polyfill'

import express from 'express'
import type { $Request, $Response } from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import apiRouter from './routes/api'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../', 'build')))

// API & data-related routes
app.use('/api', apiRouter)

// A simple healthcheck route to confirm that the server is running
app.use('/healthcheck', (req: $Request, res: $Response): void => {
  res.sendStatus(200)
})

// A catch-all to ensure the user is viewing the main page
app.get('*', (req: $Request, res: $Response): void => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
