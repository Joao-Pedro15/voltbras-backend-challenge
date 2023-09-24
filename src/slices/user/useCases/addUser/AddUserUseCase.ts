import { User } from "@prisma/client";
import { AddUserRepository } from "../../repositories/contracts";

export class AddUserUseCase {
  constructor(
    private userRepository: AddUserRepository
  ) {}

  async execute(data: Omit<User, 'id'>) {
    const user = await this.userRepository.add(data)
    return user
  }
}