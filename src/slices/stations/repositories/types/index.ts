import { Recharge, Stations } from "@prisma/client";

export interface IStation extends Stations {
  recharges: Recharge[]
}