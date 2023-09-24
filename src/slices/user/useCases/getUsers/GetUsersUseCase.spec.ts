import { MockProxy, mock } from "jest-mock-extended"
import { GetUserRepository } from "../../repositories/contracts"
import { GetUsersUseCase } from "./GetUsersUseCase"
import { fakeUser } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"

describe('testing useCase get all users', () => {
  let usersRepository: MockProxy<GetUserRepository>
  let testInstance: GetUsersUseCase

  beforeAll(() => {
    usersRepository = mock()
    usersRepository.get.mockResolvedValue([fakeUser, fakeUser])
  })

  beforeEach(() => {
    testInstance = new GetUsersUseCase(usersRepository)
  })

  it('should return Not Found Users', async () => {
    usersRepository.get.mockResolvedValueOnce([])
    await expect(testInstance.execute())
    .rejects.toThrowError("Not Found Users")
  })

  it('should return users', async () => {
    const result = await testInstance.execute()
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
  })
})