import { UserEntity } from "../../entities/UserEntity";
import { GetUserRepository } from "../../repositories/contracts";

export class GetUsersUseCase {
  constructor(
    private userRepository: GetUserRepository
  ) {}

  async execute() {
    const users = await this.userRepository.get()
    if(!users.length) throw new Error('Not Found Users')
    return users.map(user => UserEntity.create(user))
  }
}