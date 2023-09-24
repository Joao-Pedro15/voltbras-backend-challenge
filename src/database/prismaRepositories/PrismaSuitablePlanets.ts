import { SuitablePlanets } from "@prisma/client";
import { Prisma } from "../prismaClient/Prisma";

export class PrismaSuitablePlanets {

  async getById(id: string): Promise<SuitablePlanets> {
    const planet = await Prisma.suitablePlanets.findUnique({
      where: { id }
    })
    return planet!
  }

  async get(): Promise<SuitablePlanets[]> {
    const planets = await Prisma.suitablePlanets.findMany()
    return planets
  }

}