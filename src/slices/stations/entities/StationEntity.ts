export class StationEntity {
  public name: string
  public planetId: string
  public id: string
  constructor(data: { name: string, planetId: string, id: string }) {
    this.name = data.name
    this.planetId = data.planetId
  }

  static create(data: { name: string, planetId: string, id:string }) {
    return new StationEntity(data)
  }
}