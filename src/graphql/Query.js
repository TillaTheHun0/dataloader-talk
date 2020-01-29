
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    posts: [Post]!,
    post (id: Int!): Post
  }
`

export const resolvers = {
  Query: {
    posts: async (_, args, { db, dataloaders }) => {
      const posts = await db.Post.findAll()

      posts.forEach(post => dataloaders.postById.prime(post.id, post))

      return posts
    },
    post: async (_, { id }, { db }) => ({ id })
  }
}
