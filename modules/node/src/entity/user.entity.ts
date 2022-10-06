import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { User as UserAttrs } from '@template/type/entity/user.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity implements UserAttrs {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    name!: string;

  @Column()
    email!: string;
}
