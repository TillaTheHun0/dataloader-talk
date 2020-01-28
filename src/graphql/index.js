
import { mergeDeepRight } from 'ramda'

import * as Author from './Author'
import * as Tag from './Tag'
import * as Post from './Post'
import * as Query from './Query'

export const schema = [
  Author,
  Tag,
  Post,
  Query
].reduce((acc, { typeDefs, resolvers = {} }) => ({
  typeDefs: [...acc.typeDefs, typeDefs],
  resolvers: mergeDeepRight(acc.resolvers, resolvers)
}), { typeDefs: [], resolvers: {} })
