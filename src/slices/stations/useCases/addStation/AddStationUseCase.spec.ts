import { MockProxy, mock } from "jest-mock-extended"
import { AddStationUseCase } from "./AddStationUseCase"
import { AddStationsRepository } from "../../repositories/contracts"
import { GetSuitablePlanetsRepository } from "../../../suitablePlanets/repositories/contracts"
import { fakePlanetInAPI } from "../../../suitablePlanets/entities/SuitablePlanetsEntity.spec"
import { fakeStation } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"

describe("testing useCase AddStation", () => {
  let suitablePlanetsRepository: MockProxy<GetSuitablePlanetsRepository>
  let stationRepository: MockProxy<AddStationsRepository>
  let testInstance: AddStationUseCase

  beforeAll(() => {
    suitablePlanetsRepository = mock()
    stationRepository = mock()    
    suitablePlanetsRepository.getById.mockResolvedValue(fakePlanetInAPI)
    stationRepository.add.mockResolvedValue(undefined as any)
  })

  beforeEach(() => {
    testInstance = new AddStationUseCase(
      suitablePlanetsRepository,
      stationRepository
    )
  })

  it('should return Not Found SuitablePlanet', async () => {
    suitablePlanetsRepository.getById.mockResolvedValueOnce(null as any)
    await expect(testInstance.execute(fakeStation))
    .rejects.toThrowError("Not Found Planet")
  })

  it("passing in validations and create station sucessfully", async () => {
    const result = await testInstance.execute(fakeStation)
    expect(stationRepository.add).toHaveBeenCalled()
    expect(result).toBeUndefined()
  })
})