import { User } from "@prisma/client";

export interface AddUserRepository {
  add(data: User): Promise<User>
}