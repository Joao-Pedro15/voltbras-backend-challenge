import { Stations } from "@prisma/client";

export interface AddStationsRepository {
  add(data: { name: string, planetId: string }): Promise<Stations>
}