//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('EmployeeWorksOnProject', {
  hours: Sequelize.DOUBLE,
}, {
  underscored: true,
  timestamps: false,
})  