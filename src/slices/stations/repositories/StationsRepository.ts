import { Stations } from "@prisma/client";
import { AddStationsRepository, GetStationsRepository } from "./contracts";
import { IStation } from "./types";

export class StationsRepository implements AddStationsRepository, GetStationsRepository {
  constructor(private repository: AddStationsRepository&GetStationsRepository) {}

  async add(data: { name: string; planetId: string; }): Promise<Stations> {
    return await this.repository.add(data)  
  }

  async get(): Promise<Stations[]> {
    return await this.repository.get()
  }

  async getById(id: string): Promise<IStation | null> {
    return await this.repository.getById(id)  
  }
} 