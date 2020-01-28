
import { Sequelize } from 'sequelize'

const dbLogging = (msg, executionTime) => console.log(`${msg}`)

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
  define: {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  },
  logging: dbLogging
})

export { sequelize }
