import { MockProxy, mock } from "jest-mock-extended"
import { GetStationsRepository } from "../../repositories/contracts"
import { GetStationsUseCase } from "./GetStationsUseCase"
import { fakeStation } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"

describe("testing useCase get stations", () => {
  let stationsRepository: MockProxy<GetStationsRepository>
  let testInstance: GetStationsUseCase

  beforeAll(() => {
    stationsRepository = mock()
    stationsRepository.get.mockResolvedValue([fakeStation, fakeStation])
  })

  beforeEach(() => {
    testInstance = new GetStationsUseCase(stationsRepository)
  })

  it("should return Not Found Stations Error", async () => {
    stationsRepository.get.mockResolvedValueOnce([])
    await expect(testInstance.execute())
    .rejects.toThrowError('Not Found Stations')
  })

})