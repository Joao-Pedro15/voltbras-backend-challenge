import { SuitablePlanets } from "@prisma/client";
import { GetSuitablePlanetsRepository } from "./contracts";
import { ISuitablePlanets } from "./types";

export class SuitablePlanetsRepository implements GetSuitablePlanetsRepository {

  constructor(private repository: GetSuitablePlanetsRepository){}
  
  async get(): Promise<ISuitablePlanets[]> {
    return await this.repository.get()
  }

  async getById(id: string): Promise<SuitablePlanets> {
    return await this.repository.getById(id)
  }
}