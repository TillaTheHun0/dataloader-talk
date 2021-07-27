
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

export const mountApollo = ({
  schema: { typeDefs, resolvers },
  contexters = []
}) => async app => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context => contexters.reduce(
      async (acc, contexter) => contexter(context, await acc),
      {}
    ),
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ]
  })

  await server.start()

  server.applyMiddleware({ app })

  return app
}
