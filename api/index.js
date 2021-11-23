import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import jwt from 'express-jwt'
import { resolvers, typeDefs } from './schema.js'
import { readFile } from 'fs/promises'
const categories = JSON.parse(
  await readFile(new URL('./db.json', import.meta.url))
)

// this is not secure! this is for dev purposes
process.env.JWT_SECRET = process.env.JWT_SECRET || 'somereallylongsecretkey'

const PORT = process.env.PORT || 3500
const app = express()

app.use(cors())

// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  algorithms: ['HS256']
})

import './adapter.js'

const server = new ApolloServer({
  introspection: true, // do this only for dev purposes
  playground: true, // do this only for dev purposes
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { id, email } = req.user || {}
    return { id, email }
  }
})

app.use(auth)

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  const { status } = err
  res.status(status).json(err)
}
app.use(errorHandler)
await server.start()
server.applyMiddleware({ app, path: '/graphql' })

app.get('/categories', function (req, res) {
  res.send(categories)
})

if (!process.env.NOW_REGION) {
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/graphql`)
  })
}

export default app
