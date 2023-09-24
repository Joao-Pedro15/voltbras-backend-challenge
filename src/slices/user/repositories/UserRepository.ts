import { User } from "@prisma/client";
import { AddUserRepository } from "./contracts";

export class UserRepository implements AddUserRepository {
  constructor(
    private repository: AddUserRepository
  ) {}

  async add(data: User): Promise<User> {
    return await this.repository.add(data)
  }
}