//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
const Company = connection.define('Company', {
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  }
}, {
  underscored: true,
})

export default Company