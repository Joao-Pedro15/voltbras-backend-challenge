import { Resolver, Mutation, Arg } from "type-graphql";
import { RechargeModel } from "../../models/RechargeModel";
import { AddRechargeFactory } from "./factories/AddRechargeFactory";

@Resolver()
export class RechargesResolver {

  @Mutation(() => RechargeModel)
  
  async add(
    @Arg('stationId') stationId: string,
    @Arg('userId') userId: string,
    @Arg('endDate') endDate: string
  ) {
    const recharge = new AddRechargeFactory()
    return await recharge.build({stationId, userId, endDate: new Date(endDate) })
  }
}