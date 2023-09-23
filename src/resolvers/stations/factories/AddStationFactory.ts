import { PrismaStations } from "../../../database/prismaRepositories/PrismaStations";
import { PrismaSuitablePlanets } from "../../../database/prismaRepositories/PrismaSuitablePlanets";
import { StationsRepository } from "../../../slices/stations/repositories/StationsRepository";
import { AddStationUseCase } from "../../../slices/stations/useCases/addStation/AddStationUseCase";
import { SuitablePlanetsRepository } from "../../../slices/suitablePlanets/repositories/SuitablePlanetsRepository";

export class AddStationFactory {

  async build(data: { name: string, planetId: string }) {
    const prismaStation = new PrismaStations()
    const prismaSuitablePlanet = new PrismaSuitablePlanets()
    const stationsRepository = new StationsRepository(prismaStation)
    const suitablePlanetRepository = new SuitablePlanetsRepository(prismaSuitablePlanet as any)
    const station = new AddStationUseCase(
      suitablePlanetRepository,
      stationsRepository
    )
    return await station.execute(data)
  }

}