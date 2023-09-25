import { Recharge } from "@prisma/client";
import { AddRecharsRepository } from "../../repositories/contracts";
import { GetStationsRepository } from "../../../stations/repositories/contracts";
import { GetUserRepository } from "../../../user/repositories/contracts";

export class AddRechargeUseCase {
  constructor(
    private rechargesRepository: AddRecharsRepository,
    private stationsRepository: GetStationsRepository,
    private userRepository: GetUserRepository
  ) {}

  async execute(data: Omit<Recharge, 'id' | 'startDate'>) {  
    const user = await this.userRepository.getById(data.userId)
    if(!user) throw new Error('Not Found User')
    const station = await this.stationsRepository.getById(data.stationId)
    if(!station) throw new Error('Not Found Station')
    if(station.recharges.length && !this.validateRecharge(station.recharges[0].endDate)) {
      throw new Error('Station has a recharge in progress')
    }
    if(user.recharges.length && !this.validateRecharge(user.recharges[0].endDate)) {
      throw new Error("This user has a Recharge in progress")
    }
    return await this.rechargesRepository.add(data) 
  }

  validateRecharge(date: Date) {
    if(date.getTime() > new Date().getTime()) return false
    return true
  }
}