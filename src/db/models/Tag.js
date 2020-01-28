
import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../db'

export class Tag extends Model {}

Tag.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'tags' })
