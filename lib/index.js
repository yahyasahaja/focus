// @flow
//MODULES
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {
  logMode
} from './config'

//FIRST_CONFIG
const app = express()
const port = process.env.NODE_ENV || 3000

//DATABASE
import db from './db'

//API
import api from './router/api'
app.use('/api', api)

//CONFIG
app.use(morgan(logMode))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//LISTEN TO PORT
app.listen(port, () => console.log(`Server running at port ${port}`))