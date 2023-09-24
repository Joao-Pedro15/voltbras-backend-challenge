import { SuitablePlanets } from "@prisma/client";
import { SuitablePlanetsData } from "../entities/SuitablePlanetsEntity";
import { GetSuitablePlanetsRepository } from "./contracts";

export class SuitablePlanetsRepository implements GetSuitablePlanetsRepository {

  constructor(private repository: GetSuitablePlanetsRepository){}
  
  async get(): Promise<SuitablePlanets[]> {
    return await this.repository.get()
  }

  async getById(id: string): Promise<SuitablePlanets> {
    return await this.repository.getById(id)
  }
}