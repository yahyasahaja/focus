//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('DepartmentLocation', {
  address: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false,
}) 