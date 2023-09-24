import { ObjectType, Field, ID } from 'type-graphql'
import { SuitablePlanetsEntity } from '../slices/suitablePlanets/entities/SuitablePlanetsEntity';

@ObjectType()
export class SuitablePlanetModel extends SuitablePlanetsEntity {
  @Field(() => ID, { nullable: false })
  public id: string;

  @Field()
  hasStation: boolean;
  
  @Field()
  mass: number;
  
  @Field()
  name: string;
}