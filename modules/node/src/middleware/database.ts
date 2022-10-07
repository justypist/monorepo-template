import { User } from '@entity/user.entity';
import { NodeConfig } from 'config';
import { Middleware } from 'koa';
import { DataSource } from 'typeorm';

const dataSource = new DataSource(NodeConfig.database);

dataSource
  .initialize()
  .then(() => {
    console.debug('DataSource initialize successfully.');
  }).catch(error => {
    console.error(`Fail to init DataSource, ${error.message}`);
  });

export const database: Middleware = async (ctx, next) => {
  if (!dataSource.isInitialized) {
    ctx.status = 500;
    ctx.message = 'dataSource is not initialized';
    return;
  }

  ctx.state.userRepo = dataSource.getRepository(User);
  await next();
};
