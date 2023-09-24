import { Stations } from "@prisma/client";
import { IStation } from "../types";

export interface GetStationsRepository {
  get(): Promise<Stations[]>
  getById(id: string): Promise<IStation | null>
}