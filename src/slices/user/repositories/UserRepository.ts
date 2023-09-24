import { User } from "@prisma/client";
import { AddUserRepository, GetUserRepository } from "./contracts";
import { IUser } from "./types";

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
  
  async getById(id: string): Promise<IUser | null> {
    return await this.repository.getById(id)  
  }

  async getByName(name: string): Promise<User | null> {
    return await this.repository.getByName(name)
  }
}