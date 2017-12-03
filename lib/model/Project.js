//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Project', {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false,
})