
import express from 'express'

import { mountApollo } from './apollo'

import { schema } from './graphql'
import { attachModelsToContext, initDb, seedDb } from './db'
import { attachDataloadersToContext } from './dataloader'

const PORT = 4000

async function start () {
  await initDb()
  await seedDb()

  const server = await mountApollo({
    schema,
    contexters: [attachModelsToContext, attachDataloadersToContext]
  })(express())

  server.listen(4000, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
  })
}

start()
