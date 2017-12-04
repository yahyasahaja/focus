//MODULES
import express from 'express'

//SQL
import db from '../connection'

//INIT
const app = express.Router()

app.get('/getUsers', async (req, res) => {
  res.json({})
})

export default app