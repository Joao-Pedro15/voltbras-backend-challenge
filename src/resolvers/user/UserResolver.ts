import { Resolver, Mutation, Arg } from "type-graphql";
import { UserModel } from "../../models/UserModel";
import { AddUserFactory } from "./factories/AddUserFactory";

@Resolver()
export class UserResolver {

  @Mutation(() => UserModel)
  async addUser(
    @Arg('name') name: string
  ) {
    const user = new AddUserFactory()
    return await user.build({ name })
  }

}