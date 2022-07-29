import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'

import express from 'express'

import routes from './routes'

import { ErrorHandler } from '~source/shared/errors/ErrorHandler'

const app = express()

app.use(express.json())

app.use(routes)

app.use(ErrorHandler)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
