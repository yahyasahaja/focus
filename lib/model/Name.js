//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Name', {
  first_name: Sequelize.STRING,
  middle_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false,
})