
import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../db'

export class Author extends Model {}

Author.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'authors' })
