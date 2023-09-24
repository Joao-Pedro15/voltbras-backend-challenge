import { Recharge } from "@prisma/client";
import { IRercharge } from "../../stations/repositories/types";

export class RechargeHistoryEntity {
  public startDate: string
  public duration: string
  public user: string
  constructor(data: IRercharge){
    this.user = data.user.name
    this.duration = this.calcDuration(data.startDate, data.endDate)
    this.startDate = this.formatDate(data.startDate)
   }

  static create(data: IRercharge) {
    return new RechargeHistoryEntity(data)
  }

  
  private formatDate(date:Date) {
    const formated = new Intl.DateTimeFormat('pt-BR', { 
      day:  'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: "numeric",
      timeZoneName: 'short'
    })
    return formated.format(date)
  }

  private calcDuration(startDate:Date, endDate:Date) {
    const differenceMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const days = Math.floor(differenceMilliseconds / dayInMilliseconds);
    const hours = Math.floor((differenceMilliseconds % dayInMilliseconds) / (60 * 60 * 1000));
    const minutes = Math.floor((differenceMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    return `Dias: ${days}, Horas: ${hours}, Minutos: ${minutes}`
  }
}