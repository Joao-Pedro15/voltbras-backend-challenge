import 'reflect-metadata'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { SuitablePlanetsResolver } from './src/resolvers/suitablePlanets/SuitablePlanetsResolver'
import { ApolloServer } from 'apollo-server'
import { StationsResolver } from './src/resolvers/stations/StationsResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [SuitablePlanetsResolver, StationsResolver],
    emitSchemaFile: path.resolve(__dirname, 'graph.gql')
  })

  const server = new ApolloServer({ schema })
  const { url } = await server.listen()
  console.log(`Server running on ${url}`)
}

main()