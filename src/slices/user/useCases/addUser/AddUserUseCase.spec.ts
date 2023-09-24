import { MockProxy, mock } from "jest-mock-extended"
import { AddUserRepository } from "../../repositories/contracts"
import { AddUserUseCase } from "./AddUserUseCase"
import { fakeUser } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"

describe("testing useCase addUser", () => {
  let userRepository: MockProxy<AddUserRepository>
  let testInstance: AddUserUseCase

  beforeAll(() => {
    userRepository = mock()
    userRepository.add.mockResolvedValue(fakeUser)
  })

  beforeEach(() => {
    testInstance = new AddUserUseCase(userRepository)
  })

  it('should call in addUser and return user and token', async () => {
    const result = await testInstance.execute(fakeUser)
    expect(result.user.password).toBeNull()
    expect(result).toHaveProperty('token')
  })

})