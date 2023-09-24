import { User } from "@prisma/client";
import { PrismaUser } from "../../../database/prismaRepositories/PrismaUser";
import { UserRepository } from "../../../slices/user/repositories/UserRepository";
import { AddUserUseCase } from "../../../slices/user/useCases/addUser/AddUserUseCase";

export class AddUserFactory {

  async build(data: Omit<User, 'id'>) {
    const prismaUser = new PrismaUser()
    const userRepository = new UserRepository(prismaUser)
    const user = new AddUserUseCase(userRepository)
    return await user.execute(data)
  }
}