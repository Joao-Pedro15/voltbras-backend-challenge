import { GetSuitablePlanetsRepository } from "../../../suitablePlanets/repositories/contracts";
import { AddStationsRepository } from "../../repositories/contracts";

export class AddStationUseCase {
  constructor(
    private suitablePlanetsRepository: GetSuitablePlanetsRepository,
    private stationsRepository: AddStationsRepository
  ) {}

  async execute(data: { name: string, planetId:string }) {
    const planet = await this.suitablePlanetsRepository.getById(data.planetId)
    if(planet) throw new Error('Not Found Planet')
    return await this.stationsRepository.add(data)
  }

}