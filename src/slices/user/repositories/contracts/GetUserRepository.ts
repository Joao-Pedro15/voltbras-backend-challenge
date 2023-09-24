import { User } from "@prisma/client";

export interface GetUserRepository {
  get(): Promise<User[]>
}