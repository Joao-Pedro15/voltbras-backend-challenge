import { SuitablePlanetsEntity } from "../../entities/SuitablePlanetsEntity";

export interface GetSuitablePlanetsRepository {
  get(): Promise<SuitablePlanetsEntity[]>
}