import { IRercharge } from "../../stations/repositories/types"
import { randomUUID } from 'node:crypto'
import { RechargeHistoryEntity } from "./RechargeHistoryEntity"

const fakeRecharge: IRercharge = {
  endDate: new Date('2023-09-30 08:10:00'),
  id: randomUUID(),
  startDate: new Date('2023-09-30 08:00:00'),
  stationId: randomUUID(),
  user: { id: randomUUID(), name: 'Josézin', password:'eroijgreoij' },
  userId: randomUUID()
}

describe('testing entity RechargeHistory', () => {
  it('should call in entityRechargeHistory', () => {
    const recharge = RechargeHistoryEntity.create(fakeRecharge)
    expect(recharge).toEqual({
      "duration": "Dias: 0, Horas: 0, Minutos: 10",
      "startDate": "30 de setembro de 2023 8:00:00 BRT",
      "user": "Josézin",
    })
  })
})