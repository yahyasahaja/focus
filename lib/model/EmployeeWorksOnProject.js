//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Dependent', {
  hours: Sequelize.INTEGER,
}, {
  underscored: true,
  timestamps: false,
})