import { User } from "@prisma/client";
import { GetUserRepository } from "../../repositories/contracts";
import { sign } from "jsonwebtoken";

export class LoginUserUseCase {
  constructor(
    private userRepository: GetUserRepository
  ){}

  async execute(data: Omit<User, 'id'>) {
    const user = await this.userRepository.getByName(data.name)
    if(!user) throw new Error('Not Found User')
    if(user.password !== data.password) throw new Error('Invalid Password')
    const token = sign({}, String(process.env.SECRET), { expiresIn: '7d' })
    return token
  }
}