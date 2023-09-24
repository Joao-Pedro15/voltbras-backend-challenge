import { Field, ID, ObjectType } from "type-graphql";
import { UserEntity } from "../slices/user/entities/UserEntity";

@ObjectType()
export class UserModel extends UserEntity {

  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}