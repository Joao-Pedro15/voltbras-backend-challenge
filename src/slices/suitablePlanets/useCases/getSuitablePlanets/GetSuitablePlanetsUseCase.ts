import { SuitablePlanetsEntity } from "../../entities/SuitablePlanetsEntity";
import { GetSuitablePlanetsRepository } from "../../repositories/contracts";

export class GetSuitablePlanetsUseCase {
  constructor(
    private suitablePlanetsRepository: GetSuitablePlanetsRepository
  ) {}

  async execute() {
    const planets = await this.suitablePlanetsRepository.get()
    if(!planets.length) throw new Error('Not Found Planets')
    const format = planets.map(planet => SuitablePlanetsEntity.create(planet))
    return format  
  }
}