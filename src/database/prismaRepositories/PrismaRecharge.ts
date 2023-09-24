import { Recharge } from "@prisma/client";
import { Prisma } from "../prismaClient/Prisma";

export class PrismaRecharge {

  async add(data: Omit<Recharge, 'id' | 'startDate'>) {
    const recharge = await Prisma.recharge.create({
      data: {
        ...data,
        startDate: new Date()
      }
    })
    return recharge
  }

} 