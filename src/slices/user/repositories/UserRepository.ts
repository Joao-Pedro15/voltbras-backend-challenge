import { User } from "@prisma/client";
import { AddUserRepository, GetUserRepository } from "./contracts";

export class UserRepository implements AddUserRepository, GetUserRepository {
  constructor(
    private repository: AddUserRepository&GetUserRepository
  ) {}

  async add(data: User): Promise<User> {
    return await this.repository.add(data)
  }

  async get(): Promise<User[]> {
    return await this.repository.get()
  }
}