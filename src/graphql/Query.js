
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    posts: [Post]!,
    post (id: Int!): Post
  }
`

export const resolvers = {
  Query: {
    posts: async (_, args, { db }) => db.Post.findAll(),
    post: async (_, { id }, { db }) => db.Post.findByPk(id)
  }
}
