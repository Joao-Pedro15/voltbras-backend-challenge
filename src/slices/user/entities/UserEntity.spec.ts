import { fakeUser } from "../../recharges/useCases/addRecharge/AddRechargeUseCase.spec"
import { UserEntity } from "./UserEntity"

describe("testing entity User", () => {
  it('should call in entityUser with password', () => {
    const result = UserEntity.create(fakeUser)
    expect(result.password).toBeNull()
    expect(result.name).toBe(fakeUser.name)
  })
} )