
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Tag {
    text: String!
  }
`

export const resolvers = {
  Tag: {
    text: async ({ id }, args, { dataloaders }) => {
      const { text } = await dataloaders.tagById.load(id)
      return text
    }
  }
}
