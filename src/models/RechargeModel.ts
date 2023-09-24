import { ObjectType, Field, ID } from "type-graphql";
import { RechargeEntity } from "../slices/recharges/entities/RechargeEntity";

@ObjectType()
export class RechargeModel extends RechargeEntity {

  @Field(() => ID)
  id?: string | undefined;

  @Field() 
  endDate: Date;

  @Field()
  startDate: Date;

  @Field()
  stationId: string;

  @Field()
  userId: string;

}