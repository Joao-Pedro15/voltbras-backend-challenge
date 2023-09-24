import { Recharge, User } from "@prisma/client";

export interface IUser extends User {
  recharges: Recharge[]
}