import { User } from "@prisma/client";

export class UserEntity {
  public name: string
  public id: string
  public password: string | null
  constructor(data: User) {
    this.id = data.id
    this.name = data.name
    this.password = null
  }

  static create(data:User) {
    return new UserEntity(data)
  }
}