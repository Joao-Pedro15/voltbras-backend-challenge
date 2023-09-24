import { ISuitablePlanets } from "../repositories/types";
import { SuitablePlanetsEntity } from "./SuitablePlanetsEntity";
import { randomUUID }  from 'node:crypto'

export const fakePlanetInAPI: ISuitablePlanets = {
   id: randomUUID(),
   mass: 27.4,
   name: 'fakePlanet',
   stations: [{
      id: randomUUID(),
      name: 'fakeStation',
      planetId: randomUUID()
   }]
}

describe('testing entity SuitablePlanet', () => {

   it('should verify boolean in stations is false', () => {
      const result = SuitablePlanetsEntity.create({...fakePlanetInAPI, stations: []})
      expect(result.hasStation).toBeFalsy()
   })

   it('should verify boolean in stations is true', () => {

      const result = SuitablePlanetsEntity.create(fakePlanetInAPI)
      expect(result.hasStation).toBeTruthy()
   })
})