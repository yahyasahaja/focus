//MODULES
import express from 'express'
import sequelize from 'sequelize'
import _ from 'lodash'

//SQL
import sql from '../connection'

//MODELS
import Employee from '../model/Employee'

//INIT
const app = express.Router()

app.get('/getSupervisors', async (req, res) => {
  let loc = await sql.query(`
    SELECT distinct a.SSN, a.supervise_id FROM Employees a, Employees b where a.SSN = b.supervise_id
  `, { type: sequelize.QueryTypes.SELECT})

  res.json(loc)
})

app.get('/getAllEmployeeAndSupervsor', async (req, res) => {
  res.json(await Employee.findAll({include: Employee}))
})

export default app 