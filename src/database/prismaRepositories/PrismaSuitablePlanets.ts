import { SuitablePlanets } from "@prisma/client";
import { Prisma } from "../prismaClient/Prisma";

export class PrismaSuitablePlanets {

  async getById(id: string): Promise<SuitablePlanets> {
    const planet = await Prisma.suitablePlanets.findUnique({
      where: { id },
    })
    return planet!
  }

  async get() {
    const planets = await Prisma.suitablePlanets.findMany({
      include:{
        stations:{
          take: 1
        }
      }
    })
    return planets
  }

}