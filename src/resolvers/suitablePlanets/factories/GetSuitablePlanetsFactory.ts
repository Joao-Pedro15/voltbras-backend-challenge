import { API_NASA } from "../../../services/api_nasa"
import { SuitablePlanetsRepository } from "../../../slices/suitablePlanets/repositories/SuitablePlanetsRepository"
import { GetSuitablePlanetsUseCase } from "../../../slices/suitablePlanets/useCases/getSuitablePlanets/GetSuitablePlanetsUseCase"

export class GetSuitablePlanetsFactory {

  async build() {
    const dataAPI = new API_NASA()
    const suitablePlanetsRepository = new SuitablePlanetsRepository(dataAPI)
    const getSuitablePlanets = new GetSuitablePlanetsUseCase(suitablePlanetsRepository)
    return await getSuitablePlanets.execute()
  }

}