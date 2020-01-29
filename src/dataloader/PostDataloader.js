
import { Op } from 'sequelize'
import DataLoader from 'dataloader'

import { Post } from '../db'

export const postById = () => new DataLoader(postIds => Post.findAll({
  where: {
    id: {
      [Op.in]: postIds
    }
  }
}))
