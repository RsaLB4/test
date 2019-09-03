import {DefaultCrudRepository} from '@loopback/repository';
import {Userinfo, UserinfoRelations} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserinfoRepository extends DefaultCrudRepository<
  Userinfo,
  typeof Userinfo.prototype.id,
  UserinfoRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Userinfo, dataSource);
  }
}
