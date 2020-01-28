
import express from 'express'

import { mountApollo } from './apollo'

import { schema } from './graphql'
import { attachModelsToContext, initDb, seedDb } from './db'

const PORT = 4000

async function start () {
  await initDb()
  await seedDb()

  const server = mountApollo({
    schema,
    contexters: [attachModelsToContext]
  })(express())

  server.listen(4000, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
  })
}

start()
