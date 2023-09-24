import { Field, ID, InputType, ObjectType } from "type-graphql";
import { StationEntity } from "../slices/stations/entities/StationEntity";

@InputType()
export class AddStationInput {
  @Field()
  name: string

  @Field()
  planetId: string
}


@ObjectType()
export class StationModel extends StationEntity {
  
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  planetId: string


} 