//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from './connection'

//MODELS
import User from './model/User'
import Company from './model/Company'

//MODEL_RELATIONS
// Company.hasOne(User)
User.hasOne(Company)
// User.belongsTo(Company)

//SEEDS
import giveSeed from './seed'

let force = true
//CONNECT
connection.sync({force}).then(async () => {
  console.log('Database connection has been established successfuly')

  if (force) giveSeed()
}).catch(err => console.log(`Unable to connect to the database: ${err}`))