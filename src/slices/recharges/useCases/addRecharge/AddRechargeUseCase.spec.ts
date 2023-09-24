import { MockProxy, mock } from "jest-mock-extended"
import { GetStationsRepository } from "../../../stations/repositories/contracts"
import { AddRechargeUseCase } from "./AddRechargeUseCase"
import { IStation } from "../../../stations/repositories/types"
import { randomUUID } from 'node:crypto'
import { AddRecharsRepository } from "../../repositories/contracts"
import { GetUserRepository } from "../../../user/repositories/contracts"
import { IUser } from "../../../user/repositories/types"
import { Recharge } from "@prisma/client"

export const fakeRecharge: Recharge = {
  endDate: new Date('2023-09-25'),
  id: randomUUID(),
  startDate: new Date(),
  stationId: randomUUID(),
  userId: randomUUID()
}

export const fakeStation:IStation = {
  id: randomUUID(),
  name: 'fakeStation',
  planetId: randomUUID(),
  recharges: [{
    endDate: new Date(),
    id: randomUUID(),
    startDate: new Date(),
    stationId:randomUUID(),
    userId: randomUUID(),
    user: {
      id: randomUUID(),
      name: 'fakeUser'
    }
  }]
}

export const fakeUser: IUser = {
  id: randomUUID(),
  name: 'fakeUser',
  recharges: [
    {
      endDate: new Date(),
      id: randomUUID(),
      startDate: new Date(),
      stationId:randomUUID(),
      userId: randomUUID()
    }
  ]
}

describe("testing useCase addRecharges", () => {
  let stationsRepository: MockProxy<GetStationsRepository>
  let rechargeRepository: MockProxy<AddRecharsRepository>
  let userRepository: MockProxy<GetUserRepository>
  let testInstance: AddRechargeUseCase
  beforeAll(() => {
    userRepository = mock()
    stationsRepository = mock()
    rechargeRepository = mock()
    stationsRepository.getById.mockResolvedValue(fakeStation)
    rechargeRepository.add.mockResolvedValue(undefined as any)
    userRepository.getById.mockResolvedValue(fakeUser)
  })

  beforeEach(() => {
    testInstance = new AddRechargeUseCase(
      rechargeRepository, 
      stationsRepository,
      userRepository
    )
  })


  it('should return not found station error', async () => {
    stationsRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeRecharge))
    .rejects.toThrowError('Not Found Station')
  })

  it('should return not found station error', async () => {
    userRepository.getById.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeRecharge))
    .rejects.toThrowError('Not Found User')
  })

  it('should return Station has a recharge in progress error', async () => {
    stationsRepository.getById.mockResolvedValueOnce({...fakeStation, recharges: [{...fakeStation.recharges[0], endDate: new Date('2030-10-10')}]})
    await expect(testInstance.execute(fakeRecharge))
    .rejects.toThrowError('Station has a recharge in progress')
  })

  it("shoud call in validateRecharge and return false", () => {
    const result = testInstance.validateRecharge(new Date('2030-10-10'))
    expect(result).toBeFalsy()
  })

  it("shoud call in validateRecharge and return true", () => {
    const result = testInstance.validateRecharge(new Date('2020-10-10'))
    expect(result).toBeTruthy()
  })

  it('passing all validations and create charge', async () => {
    const result = await testInstance.execute(fakeRecharge)
    expect(result).toBeUndefined()
  })
})