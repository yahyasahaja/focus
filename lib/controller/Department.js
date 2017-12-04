//MODULES
import express from 'express'
import sequelize from 'sequelize'
import _ from 'lodash'

//SQL
import db from '../connection'

//MODELS
import Department from '../model/Department'

//INIT
const app = express.Router()

app.get('/getEmployeesFromResearch', async (req, res) => {
  let research = await Department.findOne({where: {name: 'Research'}})
  let employees = await research.getEmployees()
  
  res.json({num_of_employee: await research.num_of_employee, employees })
})

export default app 