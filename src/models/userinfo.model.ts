import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Userinfo extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  bdate?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  activated: boolean;


  constructor(data?: Partial<Userinfo>) {
    super(data);
  }
}

export interface UserinfoRelations {
  // describe navigational properties here
}

export type UserinfoWithRelations = Userinfo & UserinfoRelations;
