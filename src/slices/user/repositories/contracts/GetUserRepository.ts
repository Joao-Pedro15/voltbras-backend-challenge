import { User } from "@prisma/client";
import { IUser } from "../types";

export interface GetUserRepository {
  get(): Promise<User[]>
  getById(id: string): Promise<IUser | null>
  getByName(name: string): Promise<User | null>
}