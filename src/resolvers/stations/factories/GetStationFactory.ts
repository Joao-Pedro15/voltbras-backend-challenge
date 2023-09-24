import { PrismaStations } from "../../../database/prismaRepositories/PrismaStations";
import { StationsRepository } from "../../../slices/stations/repositories/StationsRepository";
import { GetStationsUseCase } from "../../../slices/stations/useCases/getStations/GetStationsUseCase";

export class GetStationFactory {

  async build() {
    const prismaStations = new PrismaStations()
    const stationsRepository = new StationsRepository(prismaStations)
    const station = new GetStationsUseCase(stationsRepository)
    return await station.execute()
  }
}