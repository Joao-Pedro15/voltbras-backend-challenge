import { PrismaSuitablePlanets } from "../../../database/prismaRepositories/PrismaSuitablePlanets"
import { SuitablePlanetsRepository } from "../../../slices/suitablePlanets/repositories/SuitablePlanetsRepository"
import { GetSuitablePlanetsUseCase } from "../../../slices/suitablePlanets/useCases/getSuitablePlanets/GetSuitablePlanetsUseCase"

export class GetSuitablePlanetsFactory {

  async build() {
    const prismaSuitablePlanets = new PrismaSuitablePlanets()
    const suitablePlanetsRepository = new SuitablePlanetsRepository(prismaSuitablePlanets)
    const getSuitablePlanets = new GetSuitablePlanetsUseCase(suitablePlanetsRepository)
    return await getSuitablePlanets.execute()
  }

}