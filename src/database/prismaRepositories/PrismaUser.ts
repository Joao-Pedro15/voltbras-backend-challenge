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

  async getByUser(id: string) {
    const user = await Prisma.user.findUnique({ 
      where: { id },
      include:{
        recharges: {
          take: 1,
          orderBy: { endDate: 'desc' }
        }
      }
    })
    return user
  }

}