import { AddStationsRepository } from "./contracts";

export class StationsRepository implements AddStationsRepository {
  constructor(private repository: AddStationsRepository) {}

  async add(data: { name: string; planetId: string; }): Promise<any> {
    return await this.repository.add(data)  
  }
} 