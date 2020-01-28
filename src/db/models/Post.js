
import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../db'

export class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'posts' })
