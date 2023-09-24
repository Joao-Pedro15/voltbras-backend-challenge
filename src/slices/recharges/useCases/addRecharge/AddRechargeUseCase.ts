import { Recharge } from "@prisma/client";
import { AddRecharsRepository } from "../../repositories/contracts";
import { GetStationsRepository } from "../../../stations/repositories/contracts";
import { RechargeEntity } from "../../entities/RechargeEntity";

export class AddRechargeUseCase {
  constructor(
    private rechargesRepository: AddRecharsRepository,
    private stationsRepository: GetStationsRepository
  ) {}

  async execute(data: Omit<Recharge, 'id'>) {    
    const station = this.stationsRepository.getById(data.stationId)
    if(!station) throw new Error('Not Found Station')
    return await this.rechargesRepository.add({...data, startDate: new Date()}) 
  }
}