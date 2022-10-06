import { User } from '@entity/user.entity';
import { Repository } from 'typeorm';

declare module 'koa' {
  interface DefaultState {
    userRepo: Repository<User>;
  }
}
