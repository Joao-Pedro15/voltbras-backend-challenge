import { Stations, SuitablePlanets } from "@prisma/client";

export interface ISuitablePlanets extends SuitablePlanets {
  stations: Stations[]
}