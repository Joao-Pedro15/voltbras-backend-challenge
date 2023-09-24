import { PrismaUser } from "../../../database/prismaRepositories/PrismaUser";
import { UserRepository } from "../../../slices/user/repositories/UserRepository";
import { GetUsersUseCase } from "../../../slices/user/useCases/getUsers/GetUsersUseCase";

export class GetUsersFactory {

  async build() {
    const prismaUser = new PrismaUser()
    const userRepository = new UserRepository(prismaUser)
    const users = new GetUsersUseCase(userRepository)
    return await users.execute()
  }

}