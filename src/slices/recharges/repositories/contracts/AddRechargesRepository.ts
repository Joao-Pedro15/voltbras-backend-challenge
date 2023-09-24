import { Recharge } from "@prisma/client";

export interface AddRecharsRepository {
  add(data: Omit<Recharge, 'id'>): Promise<Recharge>
}