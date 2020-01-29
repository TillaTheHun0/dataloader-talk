
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Post {
    title: String!
    text: String!
    author: Author!
    tags: [Tag]!
  }
`

export const resolvers = {
  Post: {
    tags: async ({ id }, args, { dataloaders }) => {
      console.log(`loading tags for Post with id ${id}`)
      return dataloaders.tagByPostId.load(id)
    }
  }
}
