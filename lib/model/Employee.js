//MODULES
import Sequelize from 'sequelize'
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Employee', {
  SSN: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  birth_date: Sequelize.DATE,
  address: Sequelize.STRING,
  salary: Sequelize.STRING,
  sex: Sequelize.ENUM(['male', 'female']),
  full_name: {
    type: Sequelize.VIRTUAL,
    get: async function () {
      let name = await connection.models.Name.findOne({where: {employee_id: this.get('SSN')}})
      
      if (!name) return null 
      return `${name.first_name} ${name.middle_name || ''} ${name.last_name}`
    }
  }
}, {
  underscored: true,
  timestamps: false,
}) 