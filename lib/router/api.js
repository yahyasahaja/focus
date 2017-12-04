//MODULES
import express from 'express'

//INIT
import Department from '../controller/Department'
import Employee from '../controller/Employee'
import Project from '../controller/Project'

const app = express.Router()
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

//ROUTER
app.use('/departments', Department)
app.use('/employee', Employee)
app.use('/project', Project)

export default app 