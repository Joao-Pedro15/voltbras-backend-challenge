import 'reflect-metadata'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { SuitablePlanetsResolver } from './src/resolvers/suitablePlanets/SuitablePlanetsResolver'
import { ApolloServer } from 'apollo-server'
import { StationsResolver } from './src/resolvers/stations/StationsResolver'
import { UserResolver } from './src/resolvers/user/UserResolver'
import { RechargesResolver } from './src/resolvers/recharges/RechargesResolver'
import Authentication from './src/middlewares/Authentication'

async function main() {
  const schema = await buildSchema({
    resolvers: [SuitablePlanetsResolver, StationsResolver, UserResolver, RechargesResolver],
    authChecker: Authentication,
    emitSchemaFile: path.resolve(__dirname, 'graph.gql'),
  })

  const server = new ApolloServer({ 
    schema,
    context: ({ req }) => {
      const context = {
        req,
        token: req.headers.authorization
      }
      return context
    }
   })
  const { url } = await server.listen()
  console.log(`Server running on ${url}`)
}

main()