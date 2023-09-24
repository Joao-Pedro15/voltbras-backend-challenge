import { User } from "@prisma/client";

export class UserEntity {
  public name: string
  public id: string
  constructor(data: User) {
    this.id = data.id
    this.name = data.name
  }

  static create(data:User) {
    return new UserEntity(data)
  }
}