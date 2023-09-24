import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { ReturnAddUser, UserModel } from "../../models/UserModel";
import { AddUserFactory } from "./factories/AddUserFactory";
import { GetUsersFactory } from "./factories/GetUsersFactory";
import { LoginUserFactory } from "./factories/LoginUserFactory";



@Resolver()
export class UserResolver {

  @Mutation(() => ReturnAddUser)
  async addUser(
    @Arg('name') name: string,
    @Arg('password') password: string
  ) {
    const user = new AddUserFactory()
    return await user.build({ name, password })
  }

  @Query(() => [UserModel])
  async get() {
    const users = new GetUsersFactory()
    return await users.build()
  }

  @Mutation(() => String)
  async login(
    @Arg('name') name: string,
    @Arg('password') password: string
  ) {
    const user = new LoginUserFactory()
    return await user.build({ name, password })
  }
}