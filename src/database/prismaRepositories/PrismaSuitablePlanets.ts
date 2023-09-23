import { Prisma } from "../prismaClient/Prisma";

export class PrismaSuitablePlanets {

  async getById(id: string) {
    const planet = await Prisma.suitablePlanets.findUnique({
      where: { id }
    })
    return planet
  }

  async get() {
    const planets = await Prisma.suitablePlanets.findMany()
    return planets
  }

}