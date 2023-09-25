import { User } from "@prisma/client";
import { Prisma } from "../prismaClient/Prisma";
import { IUser } from "../../slices/user/repositories/types";

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

  async getById(id: string): Promise<IUser | null> {
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

  async getByName(name: string) {
    const user = await Prisma.user.findFirst({
      where: { name }
    })
    return user
  }

}