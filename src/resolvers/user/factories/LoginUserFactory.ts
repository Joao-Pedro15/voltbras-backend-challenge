import { User } from "@prisma/client";
import { PrismaUser } from "../../../database/prismaRepositories/PrismaUser";
import { UserRepository } from "../../../slices/user/repositories/UserRepository";
import { LoginUserUseCase } from "../../../slices/user/useCases/loginUser/LoginUserUseCase";

export class LoginUserFactory {

  async build(data: Omit<User, 'id'>) {
    const prismaUser = new PrismaUser()
    const userRepository = new UserRepository(prismaUser as any)
    const user = new LoginUserUseCase(userRepository)
    return await user.execute(data)
  }
}