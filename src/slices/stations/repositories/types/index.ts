import { Recharge, Stations, User } from "@prisma/client";

export interface IStation extends Stations {
  recharges: IRercharge[]
}

export interface IRercharge extends Recharge {
  user: User
}
