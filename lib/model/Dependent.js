//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Dependent', {
  name: Sequelize.STRING,
  sex: Sequelize.ENUM(['male', 'female']),
  birth_date: Sequelize.DATE,
  relationship: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false,
})