import { Recharge } from "@prisma/client";

export interface AddRecharsRepository {
  add(data: Recharge): Promise<Recharge>
}