import { Recharge } from "@prisma/client"

export class RechargeEntity {
  id?: string;
  stationId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  constructor(data: Recharge) {
    this.id = data.id
    this.startDate = data.startDate ?? new Date()
    this.endDate = data.endDate
    this.userId = data.userId
    this.stationId = data.stationId
  }

  static create(data: Recharge) {
    return new RechargeEntity(data)
  }
}