//SQL
import sql from './connection'
import moment from 'moment'

//MODELS
import Employee from './model/Employee'
import Name from './model/Name'
import Department from './model/Department'
import DeptLoc from './model/DepartmentLocation'
import WorksOn from './model/EmployeeWorksOnProject'
import Dependent from './model/Dependent'
import Project from './model/Project'

/*
drop table DepartmentLocations;
drop table DeptManagedByEmployees;
drop table EmployeeWorksOnProjects;
drop table Projects;
drop table Names;
drop table Employees;
drop table Departments;
drop table Dependents;

*/
 
//SEEDS
export default async () => {
  let loc, SSN
 
  // await Name.drop()
  // await Employee.drop()

  await sql.query('SET FOREIGN_KEY_CHECKS = 0', null)
  loc = await Employee.bulkCreate([
    { 
      SSN: SSN = '123456789',
      supervise_id: '333445555',
      dept_id: 5
    },
    { 
      SSN: SSN = '333445555',
      supervise_id: '888665555',
      dept_id: 5
    },
    { 
      SSN: SSN = '999887777',
      supervise_id: '987654321',
      dept_id: 4
    },
    { 
      SSN: SSN = '987654321',
      supervise_id: '888665555',
      dept_id: 4
    }, 
    { 
      SSN: SSN = '666884444',
      supervise_id: '333445555',
      dept_id: 5
    },
    { 
      SSN: SSN = '453453453',
      supervise_id: '333445555',
      dept_id: 5
    },
    { 
      SSN: SSN = '987987987',
      supervise_id: '333445555',
      dept_id: 4
    },
    { 
      SSN: SSN = '888665555',
      dept_id: 1
    },
  ])

  await Department.bulkCreate([ 
    {
      name: 'Research',
      id: 5,
    },
    {
      name: 'Administration',
      id: 4,
    },
    {
      name: 'HeadQuarters',
      id: 1,
    },
  ])

  await DeptLoc.bulkCreate([
    {
      dept_id: 1,
      address: 'Houston',
    },
    {
      dept_id: 4,
      address: 'Stafford',
    },
    {
      dept_id: 5,
      address: 'Bellaire',
    },
    {
      dept_id: 5,
      address: 'Sugarland',
    },
    {
      dept_id: 5,
      address: 'Houston',
    },
  ])

  await Project.bulkCreate([
    {
      name: 'ProductX',
      id: 1,
      location: 'Bellaire',
      dept_id: 5,
    },
    {
      name: 'ProductY',
      id: 2,
      location: 'Sugarland',
      dept_id: 5,
    },
    {
      name: 'ProductZ',
      id: 3,
      location: 'Houston',
      dept_id: 5,
    },
    {
      name: 'Computerization',
      id: 10,
      location: 'Stafford',
      dept_id: 4,
    },
    {
      name: 'Recognization',
      id: 20,
      location: 'Houston',
      dept_id: 1,
    },
    {
      name: 'Newbenefits',
      id: 30,
      location: 'Stafford',
      dept_id: 4,
    },
  ])

  await Dependent.bulkCreate([
    {
      employee_id: '333445555',
      name: 'Alice',
    },
    {
      employee_id: '333445555',
      name: 'Theodore',
    },
    {
      employee_id: '333445555',
      name: 'Joy',
    },
    {
      employee_id: '987654321',
      name: 'Abner',
    },
    {
      employee_id: '123456789',
      name: 'Michael',
    },
    {
      employee_id: '123456789',
      name: 'Alice',
    },
    {
      employee_id: '123456789',
      name: 'Alizabeth',
    },
  ])
  
  await WorksOn.bulkCreate([
    {
      employee_id: '123456789',
      project_id: 1,
      hours: 32.5,
    },
    {
      employee_id: '123456789',
      project_id: 2,
      hours: 7.5,
    },
    {
      employee_id: '666884444',
      project_id: 3,
      hours: 40.0,
    },
    {
      employee_id: '453453453',
      project_id: 1,
      hours: 20.0,
    },
    {
      employee_id: '453453453',
      project_id: 2,
      hours: 20.0,
    },
    {
      employee_id: '333445555',
      project_id: 2,
      hours: 10.0,
    },
    {
      employee_id: '333445555',
      project_id: 3,
      hours: 10.0,
    },
    {
      employee_id: '333445555',
      project_id: 10,
      hours: 10.0,
    },
    {
      employee_id: '333445555',
      project_id: 20,
      hours: 10.0,
    },
    {
      employee_id: '999887777',
      project_id: 30,
      hours: 30.0,
    },
    {
      employee_id: '987987987',
      project_id: 10,
      hours: 35.0,
    },
    {
      employee_id: '987987987',
      project_id: 30,
      hours: 5.0,
    },
    {
      employee_id: '987654321',
      project_id: 30,
      hours: 20.0,
    },
    {
      employee_id: '987654321',
      project_id: 20,
      hours: 15.0,
    },
    {
      employee_id: '888665555',
      project_id: 20.0,
    },
  ])

  await sql.query('SET FOREIGN_KEY_CHECKS = 1', null)
  // loc = await Employee.create(
  //   { SSN: SSN = '5345346456454', birth_date: new Date(), sex: 'female' }
  // )

  // loc = await Name.create({ first_name: 'Yahya', last_name: 'Sahaja' })
  // console.log(await (await Employee.findOne({where: {SSN}})).addName(1))
  // loc = await Employee.findOne({ where: { SSN }, include: Name })
  // loc = await Name.findOne({ where: { employee_id: SSN }, include: Employee })
  // loc = await Department.create({name: 'Research'})

  // console.log(printPrototype(await Employee.findOne({where: {SSN}})))
  // console.log(JSON.stringify(await (await Employee.findOne({where: {SSN}})).setDepartment(loc.id)))
  // console.log(JSON.stringify(await (await Department.findOne({where: {id: loc.id}})).getEmployees()))
  // console.log(JSON.stringify(await (await Name.findOne({where: {employee_id: SSN}})).getEmployee))
}

function printPrototype(obj, i) {
  var n = Number(i || 0);
  var indent = Array(2 + n).join("-");

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(indent, key, ": ", obj[key]);
    }
  }

  if (obj) {
    if (Object.getPrototypeOf) {
      printPrototype(Object.getPrototypeOf(obj), n + 1);
    } else if (obj.__proto__) {
      printPrototype(obj.__proto__, n + 1);
    }
  }
}