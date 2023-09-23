export interface AddStationsRepository {
  add(data: { name: string, planetId: string }): Promise<any>
}