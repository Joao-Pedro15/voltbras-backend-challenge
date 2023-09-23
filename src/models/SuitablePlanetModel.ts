import { ObjectType, Field } from 'type-graphql'
import { SuitablePlanetsEntity } from '../slices/suitablePlanets/entities/SuitablePlanetsEntity';

@ObjectType()
export class SuitablePlanetModel extends SuitablePlanetsEntity {
  @Field()
  hasStation: boolean;
  
  @Field()
  mass: number;
  
  @Field()
  name: string;
}