import { User } from "@prisma/client";
import { AddUserRepository } from "../../repositories/contracts";
import { sign } from 'jsonwebtoken'
import { UserEntity } from "../../entities/UserEntity";

export class AddUserUseCase {
  constructor(
    private userRepository: AddUserRepository
  ) {}

  async execute(data: Omit<User, 'id'>) {
    const user = await this.userRepository.add(data)
    const token = sign({}, String(process.env.SECRET), { expiresIn: '7 d' })
    return {
      user: UserEntity.create(user),
      token
    }
  }
}