import { RechargeHistoryEntity } from "../../../recharges/entities/RechargeHistoryEntity";
import { GetStationsRepository } from "../../repositories/contracts";

export class GetStationByIdUseCase {
  constructor(
    private stationsRepository: GetStationsRepository
  ) {}

  async execute(id: string) {
    const station = await this.stationsRepository.getById(id)
    if(!station) throw new Error('Not Found Station')
    if(!station.recharges.length) throw new Error("Not recharges in this station")
    return station.recharges.map(recharge => RechargeHistoryEntity.create(recharge))
  }
}