import 'reflect-metadata'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { SuitablePlanetsResolver } from './src/resolvers/suitablePlanets/SuitablePlanetsResolver'
import { ApolloServer } from 'apollo-server'
import { StationsResolver } from './src/resolvers/stations/StationsResolver'
import { UserResolver } from './src/resolvers/user/UserResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [SuitablePlanetsResolver, StationsResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'graph.gql')
  })

  const server = new ApolloServer({ schema })
  const { url } = await server.listen()
  console.log(`Server running on ${url}`)
}

main()