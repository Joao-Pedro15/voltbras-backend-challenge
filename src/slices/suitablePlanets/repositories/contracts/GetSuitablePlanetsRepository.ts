import { SuitablePlanets } from "@prisma/client";
import { ISuitablePlanets } from "../types";

export interface GetSuitablePlanetsRepository {
  get(): Promise<ISuitablePlanets[]>
  getById(id:string): Promise<SuitablePlanets>
}