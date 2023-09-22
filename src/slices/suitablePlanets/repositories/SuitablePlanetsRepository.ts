import { SuitablePlanetsData } from "../entities/SuitablePlanetsEntity";
import { GetSuitablePlanetsRepository } from "./contracts";

export class SuitablePlanetsRepository implements GetSuitablePlanetsRepository {

  constructor(private repository: GetSuitablePlanetsRepository){}
  
  async get(): Promise<SuitablePlanetsData[]> {
    return await this.repository.get()
  }
}