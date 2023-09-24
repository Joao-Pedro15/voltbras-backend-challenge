import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AddStationFactory } from "./factories/AddStationFactory";
import { AddStationInput, StationModel } from "../../models/StationModel";


@Resolver()
export class StationsResolver {
  
  @Mutation(() => StationModel)
  async installStation(
    @Arg('name') name: string,
    @Arg('planetId') planetId: string
    ) {
    const addPlanet = new AddStationFactory()
    const planet = await addPlanet.build({ name, planetId })
    return planet
  }
}