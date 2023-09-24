import { ObjectType, Field, ID } from "type-graphql";
import { RechargeEntity } from "../slices/recharges/entities/RechargeEntity";
import { RechargeHistoryEntity } from "../slices/recharges/entities/RechargeHistoryEntity";

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

@ObjectType()
export class StationHistory extends RechargeHistoryEntity {

  @Field()
  public duration: string;

  @Field()
  public startDate: string;

  @Field()
  public user: string;

}