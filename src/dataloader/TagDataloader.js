
import { Op } from 'sequelize'

import DataLoader from 'dataloader'

import { Tag, Post } from '../db'

export const tagByPostId = () => new DataLoader(async postIds => {
  const tags = await Tag.findAll({
    include: [{
      model: Post,
      as: 'posts',
      where: {
        id: {
          [Op.in]: postIds
        }
      }
    }]
  })

  return postIds.map(postId =>
    tags.filter(tag =>
      tag.posts.find(post => post.id === postId)
    )
  )
})
