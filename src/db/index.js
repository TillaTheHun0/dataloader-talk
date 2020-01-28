
import { sequelize } from './db'
import { seedDb } from './seed'

import { Author } from './models/Author'
import { Tag } from './models/Tag'
import { Post } from './models/Post'

Post.belongsTo(Author, { as: 'author' })
Post.belongsToMany(Tag, { as: 'tags', through: 'post_tags' })

Tag.belongsToMany(Post, { as: 'posts', through: 'post_tags' })

const initDb = async () => {
  await sequelize.sync({ force: true })
}

const attachModelsToContext = (context, acc) => ({
  ...acc,
  db: {
    Author,
    Tag,
    Post
  }
})

export {
  initDb,
  seedDb,
  attachModelsToContext,
  sequelize,
  Author,
  Tag,
  Post
}
