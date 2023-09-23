import { Prisma } from "../prismaClient/Prisma";

export class PrismaStations {

  async add(data: { name: string, planetId: string }) {
    await Prisma.stations.create({ data })
  }

}