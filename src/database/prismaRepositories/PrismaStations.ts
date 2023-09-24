import { Prisma } from "../prismaClient/Prisma";

export class PrismaStations {

  async add(data: { name: string, planetId: string }) {
    const resp = await Prisma.stations.create({ data })
    return resp
  }

  async get() {
    const stations = await Prisma.stations.findMany()
    return stations
  }

}