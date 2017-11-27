import Sequelize from 'sequelize'
import connection from './connection'
import User from './model/User'

User.sync({force: true}).then(() => {
  console.log('Database connection has been established successfuly')
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
}).catch(err => console.log(`Unable to connect to the database: ${err}`))