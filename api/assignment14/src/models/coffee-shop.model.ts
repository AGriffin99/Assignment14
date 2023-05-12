import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CoffeeShop extends Model {
  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  storeNumber?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CoffeeShop>) {
    super(data);
  }
}

export interface CoffeeShopRelations {
  // describe navigational properties here
}

export type CoffeeShopWithRelations = CoffeeShop & CoffeeShopRelations;
