import { MockProxy, mock } from "jest-mock-extended"
import { GetUserRepository } from "../../repositories/contracts"
import { LoginUserUseCase } from "./LoginUserUseCase"
import { fakeUser } from "../../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"

describe('testing useCase loginUser', () => {
  let userRepository: MockProxy<GetUserRepository>
  let testInstance: LoginUserUseCase

  beforeAll(() => {
    userRepository = mock()
    userRepository.getByName.mockResolvedValue(fakeUser)
  })

  beforeEach(() => {
    testInstance = new LoginUserUseCase(userRepository)
  })

  it('should return Not Found User error', async () => {
    userRepository.getByName.mockResolvedValueOnce(null)
    await expect(testInstance.execute(fakeUser))
    .rejects.toThrowError('Not Found User')
  })

  it('should return Not Found User error', async () => {
    await expect(testInstance.execute({...fakeUser, password: 'OtherPassword'}))
    .rejects.toThrowError('Invalid Password')
  })

})