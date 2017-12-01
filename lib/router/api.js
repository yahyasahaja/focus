//MODULES
import express from 'express'

//INIT
import User from '../controller/User'
const app = express.Router()
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

//ROUTER
app.use('/user', User)

export default app 