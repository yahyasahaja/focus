import Sequelize from 'sequelize'
import connection from '../connection'

const User = connection.define('User', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  }
})

export default User