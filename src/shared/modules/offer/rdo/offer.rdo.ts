import { Expose, Type } from 'class-transformer';
import { UserEntity } from '../../user/index.js';
import { Ref } from '@typegoose/typegoose';
import { Cities, Coordinates } from '../../../types/cities.enum.js';
import { Goods } from '../../../types/goods.enum.js';
import { HousesTypes } from '../../../types/houses-types.enum.js';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class OfferRdo {

  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public createdDate: Date;

  @Expose()
  public city: Cities;

  @Expose()
  public previewImage: string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public houseType: HousesTypes;

  @Expose()
  public bedrooms: number;

  @Expose()
  public guests: number;

  @Expose()
  public price: number;

  @Expose()
  public goods: Goods[];

  @Expose()
  public userId: Ref<UserEntity>;

  @Expose()
  public commentsCount: number;

  @Expose()
  public coordinates: Coordinates;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public user: UserRdo;
}
