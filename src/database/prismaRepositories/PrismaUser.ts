import { User } from "@prisma/client";
import { Prisma } from "../prismaClient/Prisma";

export class PrismaUser {
  
  async add(data: User) {
    const user = await Prisma.user.create({
      data: {...data}
    })
    return user
  }

  async get() {
    const users = await Prisma.user.findMany()
    return users
  }

}