import { Stations } from "@prisma/client";

export interface GetStationsRepository {
  get(): Promise<Stations[]>
  getById(id: string): Promise<Stations>
}