
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
    title: async ({ id }, args, { dataloaders }) => {
      const { title } = await dataloaders.postById.load(id)
      return title
    },
    text: async ({ id }, args, { dataloaders }) => {
      const { text } = await dataloaders.postById.load(id)
      return text
    },
    tags: async ({ id }, args, { dataloaders }) => {
      console.log(`loading tags for Post with id ${id}`)
      return dataloaders.tagByPostId.load(id)
    }
  }
}
