import { SuitablePlanets } from "@prisma/client";

export interface GetSuitablePlanetsRepository {
  get(): Promise<SuitablePlanets[]>
  getById(id:string): Promise<SuitablePlanets>
}