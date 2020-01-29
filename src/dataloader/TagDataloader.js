
import { Op } from 'sequelize'

import DataLoader from 'dataloader'

import { Tag, Post } from '../db'

export const tagByPostId = (context) => new DataLoader(async postIds => {
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

  // Prime a dataloader from another dataloader
  tags.forEach(tag => {
    context.dataloaders.tagById.prime(tag.id, tag)
  })

  return postIds.map(postId =>
    tags.filter(tag =>
      tag.posts.find(post => post.id === postId)
    )
  )
})

export const tagById = () => new DataLoader(tagIds => Tag.findAll({
  where: {
    id: {
      [Op.in]: tagIds
    }
  }
}))
