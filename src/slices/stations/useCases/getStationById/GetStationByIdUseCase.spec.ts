import { MockProxy, mock } from "jest-mock-extended"
import { GetStationsRepository } from "../../repositories/contracts"
import { GetStationByIdUseCase } from "./GetStationByIdUseCase"
import { fakeStation } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"
import { RechargeHistoryEntity } from "../../../recharges/entities/RechargeHistoryEntity"

describe("testing useCase getStationById", () => {
  let stationsRepository: MockProxy<GetStationsRepository>
  let testInstance: GetStationByIdUseCase

  beforeAll(() => {
    stationsRepository = mock()
    stationsRepository.getById.mockResolvedValue(fakeStation)
  })

  beforeEach(() => {
    testInstance = new GetStationByIdUseCase(stationsRepository)
  })

  it('should return Error not Found Station', async () => {
    stationsRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeStation.id))
    .rejects.toThrowError("Not Found Station")
  })

  it('should return Error not Found Recharges in station', async () => {
    stationsRepository.getById.mockResolvedValueOnce({...fakeStation, recharges: []})
    await expect(testInstance.execute(fakeStation.id))
    .rejects.toThrowError("Not recharges in this station")
  })

  it('should return recharges format history by station', async () => {
    const result = await testInstance.execute(fakeStation.id)
    expect(result[0].user).toBe('fakeUser')
    expect(result[0]).toBeInstanceOf(RechargeHistoryEntity)
  })



})