import { Recharge } from "@prisma/client";
import { AddRecharsRepository } from "./contracts";

export class RechargesRepository implements AddRecharsRepository {
  constructor(
    private repository: AddRecharsRepository
  ) {}

  async add(data: Recharge) {
    return await this.repository.add(data)
  }
}