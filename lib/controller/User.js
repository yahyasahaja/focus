//MODULES
import express from 'express'

//SQL
import db from '../connection'

//INIT
const app = express.Router()

app.get('/getUsers', async (req, res) => {
  const user = await db.models.User.findAll()
  
  res.json(user)
})

export default app