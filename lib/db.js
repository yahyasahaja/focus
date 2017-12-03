//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from './connection'

//MODELS
import Employee from './model/Employee'
import Name from './model/Name'
import Department from './model/Department'
import DepartmentLocation from './model/DepartmentLocation'
import DeptManagedByEmployee from './model/DeptManagedByEmployee'
import Dependent from './model/Dependent'
import Project from './model/Project'
import EmployeeWorksOnProject from './model/EmployeeWorksOnProject'

//MODEL_RELATIONS
Employee.hasMany(Employee, {foreignKey: 'supervise_id'})
Employee.hasMany(Name, {foreignKey: 'employee_id'})
Name.belongsTo(Employee, {foreignKey: 'employee_id'})
Employee.hasMany(Dependent, {foreignKey: 'dependent_id'})

Department.hasMany(Employee, {foreignKey: 'dept_id'})
Employee.belongsTo(Department, {foreignKey: 'dept_id'})
Department.hasMany(DepartmentLocation, {foreignKey: 'dept_id'})
DepartmentLocation.belongsTo(Department, {foreignKey: 'dept_id'}) 
DeptManagedByEmployee.hasOne(Employee, {foreignKey: 'employee_id'})
DeptManagedByEmployee.hasOne(Department, {foreignKey: 'dept_id'})
Department.hasMany(Project, {foreignKey: 'project_id'})

Project.belongsToMany(Employee, {through: 'EmployeeWorksOnProject', foreignKey: 'project_id'})
Employee.belongsToMany(Project, {through: 'EmployeeWorksOnProject', foreignKey: 'employee_id'})
//SEEDS
import giveSeed from './seed' 

let force = true
//CONNECT
connection.sync({force}).then(async () => {
  console.log('Database connection has been established successfuly')

  if (force) giveSeed()
}).catch(err => console.log(`Unable to connect to the database: ${err}`))