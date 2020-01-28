
import { ApolloServer } from 'apollo-server-express'

export const mountApollo = ({
  schema: { typeDefs, resolvers },
  contexters = []
}) => app => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context => contexters.reduce(
      async (acc, contexter) => contexter(context, await acc),
      {}
    )
  })

  server.applyMiddleware({ app })

  return app
}
