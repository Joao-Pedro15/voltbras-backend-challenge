import { StationEntity } from "../../entities/StationEntity";
import { GetStationsRepository } from "../../repositories/contracts";

export class GetStationsUseCase {
  constructor(
    private stationsRepository: GetStationsRepository
  ) {}

  async execute() {
    const stations = await this.stationsRepository.get()
    if(!stations.length) throw new Error('Not Found Stations')
    return stations.map(station => StationEntity.create(station))
  }
}