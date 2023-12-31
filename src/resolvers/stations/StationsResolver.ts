import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AddStationFactory, GetStationFactory } from "./factories";
import { AddStationInput, StationModel } from "../../models/StationModel";
import { StationHistory } from "../../models/RechargeModel";
import { GetStationHistoryFactory } from "./factories/GetStationHistoryFactory";


@Resolver()
export class StationsResolver {
  
  @Query(() => [StationModel])
  async stations() {
    const station = new GetStationFactory()
    return await station.build()
  }

  @Query(() => [StationHistory]) 
  async stationHistory(@Arg('id') id:string) {
    const station = new GetStationHistoryFactory()
    return await station.build(id)
  }


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