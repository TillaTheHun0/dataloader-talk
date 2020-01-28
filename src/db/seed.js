
import { sequelize } from './db'

import { Post } from './models/Post'
import { Tag } from './models/Tag'
import { Author } from './models/Author'

const PostsData = [
  {
    id: 1,
    title: 'Awesome Post',
    text: 'This is a post about how to be awesome',
    authorId: 1
  },
  {
    id: 2,
    title: 'Okay',
    text: 'This is a post about how to be okay',
    authorId: 1
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    text: 'This is a post about how to be ambiguous',
    authorId: 2
  }
]

const AuthorsData = [
  {
    id: 1,
    name: 'TillaTheHun0'
  },
  {
    id: 2,
    name: 'Umaru chan'
  }
]

const TagsData = [
  {
    id: 1,
    text: 'java'
  },
  {
    id: 2,
    text: 'groovy'
  },
  {
    id: 3,
    text: 'haskell'
  },
  {
    id: 4,
    text: '; SELECT * FROM USERS'
  }
]

const PostTagsData = [
  {
    post_id: 1,
    tag_id: 1
  },
  {
    post_id: 1,
    tag_id: 3
  },
  {
    post_id: 1,
    tag_id: 4
  },
  {
    post_id: 2,
    tag_id: 1
  },
  {
    post_id: 2,
    tag_id: 2
  },
  {
    post_id: 3,
    tag_id: 4
  },
  {
    post_id: 3,
    tag_id: 2
  },
  {
    post_id: 3,
    tag_id: 1
  },
  {
    post_id: 3,
    tag_id: 3
  }
]

export const seedDb = async () => {
  const [data] = await sequelize.query('SELECT id FROM posts')
  if (data.length) {
    console.log('already seeded. Returning...')
    return
  }

  return sequelize.transaction(async transaction => {
    await Author.bulkCreate(AuthorsData, { transaction })
    await Post.bulkCreate(PostsData, { transaction })
    await Tag.bulkCreate(TagsData, { transaction })
    await sequelize.getQueryInterface().bulkInsert('post_tags', PostTagsData, { transaction })
  })
}
