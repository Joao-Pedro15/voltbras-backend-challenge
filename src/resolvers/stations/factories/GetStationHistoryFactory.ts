import { PrismaStations } from "../../../database/prismaRepositories/PrismaStations";
import { StationsRepository } from "../../../slices/stations/repositories/StationsRepository";
import { GetStationByIdUseCase } from "../../../slices/stations/useCases/getStationById/GetStationByIdUseCase";

export class GetStationHistoryFactory {

  async build(id:string) {
    const prismaStation = new PrismaStations()
    const stationsRepository = new StationsRepository(prismaStation)
    const station = new GetStationByIdUseCase(stationsRepository)
    return await station.execute(id)
  }

}