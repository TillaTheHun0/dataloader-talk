
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Author {
    id: Int!
    name: String!
  }
`
