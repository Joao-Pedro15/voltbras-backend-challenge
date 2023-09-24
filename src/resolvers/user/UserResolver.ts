import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { UserModel } from "../../models/UserModel";
import { AddUserFactory } from "./factories/AddUserFactory";
import { GetUsersFactory } from "./factories/GetUsersFactory";

@Resolver()
export class UserResolver {

  @Mutation(() => UserModel)
  async addUser(
    @Arg('name') name: string
  ) {
    const user = new AddUserFactory()
    return await user.build({ name })
  }

  @Query(() => [UserModel])
  async get() {
    const users = new GetUsersFactory()
    return await users.build()
  }
}