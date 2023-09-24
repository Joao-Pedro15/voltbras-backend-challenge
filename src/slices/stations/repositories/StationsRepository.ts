import { Stations } from "@prisma/client";
import { AddStationsRepository } from "./contracts";

export class StationsRepository implements AddStationsRepository {
  constructor(private repository: AddStationsRepository) {}

  async add(data: { name: string; planetId: string; }): Promise<Stations> {
    return await this.repository.add(data)  
  }
} 