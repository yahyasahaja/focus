import Sequelize from 'sequelize'
import {
  database,
} from './config'

export default new Sequelize(database.dbname, database.user, database.password, {
  host: database.host,
  dialect: database.dialect,
  port: database.port,
  pool: {
    max: database.poolSize,
    min: 0,
    acquire: 30000,
    idle: 1000,
  }
})