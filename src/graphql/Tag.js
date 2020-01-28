
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Tag {
    text: String!
  }
`
