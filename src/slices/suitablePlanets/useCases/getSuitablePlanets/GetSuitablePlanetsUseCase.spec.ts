import { MockProxy, mock } from 'jest-mock-extended'
import { GetSuitablePlanetsRepository } from '../../repositories/contracts'
import { GetSuitablePlanetsUseCase } from './GetSuitablePlanetsUseCase'
import { fakePlanetInAPI } from '../../entities/SuitablePlanetsEntity.spec'
import { SuitablePlanetsEntity } from '../../entities/SuitablePlanetsEntity'

describe("testing useCase getSuitablePlanets", () => {
  let suitablePlanetsRepository: MockProxy<GetSuitablePlanetsRepository>
  let testInstance: GetSuitablePlanetsUseCase

  beforeAll(() => {
    suitablePlanetsRepository = mock()
    suitablePlanetsRepository.get.mockResolvedValue([fakePlanetInAPI, fakePlanetInAPI])
  })

  beforeEach(() => {
    testInstance = new GetSuitablePlanetsUseCase(suitablePlanetsRepository)
  })

  it("should return Not Found Planets error", async () => {
    suitablePlanetsRepository.get.mockResolvedValueOnce([])
    await expect(testInstance.execute())
    .rejects.toThrowError('Not Found Planets')
  })

  it("should return Not Found Planets error", async () => {
    const result = await testInstance.execute()
    expect(suitablePlanetsRepository.get).toHaveBeenCalled()
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(SuitablePlanetsEntity.create(fakePlanetInAPI))
  })
})