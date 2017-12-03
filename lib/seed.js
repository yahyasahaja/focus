//SQL
import sql from './connection'

//MODELS
import Employee from './model/Employee'
import Name from './model/Name'
import Department from './model/Department'

//SEEDS
export default async () => {
  let loc, SSN

  // await Name.drop()
  // await Employee.drop()

  loc = await Employee.create(
    { SSN: SSN = '2432532545345', birth_date: new Date(), sex: 'male' }
  )

  loc = await Employee.create(
    { SSN: SSN = '5345346456454', birth_date: new Date(), sex: 'female' }
  )

  loc = await Name.create({ first_name: 'Yahya', last_name: 'Sahaja' })
  console.log(await (await Employee.findOne({where: {SSN}})).addName(1))
  loc = await Employee.findOne({ where: { SSN }, include: Name })
  loc = await Name.findOne({ where: { employee_id: SSN }, include: Employee })
  loc = await Department.create({name: 'Research'})

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