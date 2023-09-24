import { Resolver, Query } from "type-graphql";
import { SuitablePlanetsEntity } from "../../slices/suitablePlanets/entities/SuitablePlanetsEntity";
import { GetSuitablePlanetsFactory } from "./factories/GetSuitablePlanetsFactory";
import { SuitablePlanetModel } from "../../models/SuitablePlanetModel";

@Resolver()
export class SuitablePlanetsResolver {

  @Query(() => [SuitablePlanetModel], { name: 'SuitablePlanets' }) 
  async get() {
    const item = new GetSuitablePlanetsFactory()
    return await item.build() as SuitablePlanetsEntity[]
  }
}