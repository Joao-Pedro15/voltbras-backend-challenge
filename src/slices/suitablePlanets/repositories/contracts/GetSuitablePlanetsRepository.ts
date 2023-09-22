import { SuitablePlanetsData } from "../../entities/SuitablePlanetsEntity";

export interface GetSuitablePlanetsRepository {
  get(): Promise<SuitablePlanetsData[]>
}