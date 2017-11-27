//MODULES
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {
  log_mode
} from './config'

//FIRST_CONFIG
const app = express()
const port = process.env.NODE_ENV || 3000

//DATABASE
import db from './db'

//CONFIG
app.use(morgan(log_mode))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//LISTEN TO PORT
app.listen(port, () => console.log(`Server running at port ${port}`))