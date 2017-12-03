//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('DeptManagedByEmployee', {
  start_date: Sequelize.DATE,
}, {
  underscored: true,
  timestamps: false,
}) 