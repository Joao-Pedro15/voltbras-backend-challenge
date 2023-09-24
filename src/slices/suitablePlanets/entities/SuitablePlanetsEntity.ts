import { SuitablePlanets } from "@prisma/client"
import { ISuitablePlanets } from "../repositories/types"



export class SuitablePlanetsEntity {
  public name: string
  public mass: number
  public hasStation: boolean
  public id: string
  constructor(data: ISuitablePlanets){
    this.id = data.id
    this.name = data.name
    this.mass = Number(data.mass) ?? 0
    this.hasStation = data.stations.length ? true : false
  }

  static create(data: ISuitablePlanets) {
    return new SuitablePlanetsEntity(data)
  }
}