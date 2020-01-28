
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Post {
    title: String!
    text: String!
    author: Author!
    tags: [Tag]!
  }
`
