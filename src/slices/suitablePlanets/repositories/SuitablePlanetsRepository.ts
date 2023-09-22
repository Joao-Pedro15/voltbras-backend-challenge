import { SuitablePlanetsEntity } from "../entities/SuitablePlanetsEntity";
import { GetSuitablePlanetsRepository } from "./contracts";

export class SuitablePlanetsRepository implements GetSuitablePlanetsRepository {

  constructor(private repository: GetSuitablePlanetsRepository){}
  
  async get(): Promise<SuitablePlanetsEntity[]> {
    return await this.repository.get()
  }
}