import { Recharge } from "@prisma/client";
import { PrismaRecharge } from "../../../database/prismaRepositories/PrismaRecharge";
import { RechargesRepository } from "../../../slices/recharges/repositories/RechargesRepository";
import { AddRechargeUseCase } from "../../../slices/recharges/useCases/addRecharge/AddRechargeUseCase";
import { PrismaStations } from "../../../database/prismaRepositories/PrismaStations";
import { StationsRepository } from "../../../slices/stations/repositories/StationsRepository";

export class AddRechargeFactory {

  async build(data: Omit<Recharge, 'id' | 'startDate'>) {
    const prismaRecharge = new PrismaRecharge()
    const prismaStations = new PrismaStations()
    const rechargeRepository = new RechargesRepository(prismaRecharge as any)
    const stationsRepository = new StationsRepository(prismaStations)
    const recharge = new AddRechargeUseCase(rechargeRepository, stationsRepository)
    return await recharge.execute(data)
  }
}