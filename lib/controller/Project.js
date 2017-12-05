//MODULES
import express from 'express'
import sequelize from 'sequelize'
import _ from 'lodash'

//SQL
import sql from '../connection'

//MODELS
import Project from '../model/Project'
import Employee from '../model/Employee'

//INIT
const app = express.Router()

app.get('/employeesWorkOn/:id', async (req, res) => {
  let loc = await Project.findOne({where: {name: req.params.id}, include: Employee})

  res.json(loc)
})

app.get('/location', async (req, res) => {
  res.json(await Project.findAll({where: {location: {'$or': ['Houston', 'Stafford']}}}))
})

app.get('/getProjectHandledWith/:id', async (req, res) => {
  res.json(await (await Employee.findOne({where: {SSN: req.params.id}})).getProjects())
})

export default app 