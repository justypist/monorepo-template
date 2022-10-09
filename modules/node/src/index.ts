import { NodeConfig } from '@config';
import { userConrtoller } from '@controller/user.controller';
import { database } from '@middleware/database';
import { catcher } from '@middleware/error';
import { logger } from '@middleware/logger';
import Koa from 'koa';
import KoaBody from 'koa-body';
import KoaStatics from 'koa-statics';
import Koa2Cors from 'koa2-cors';
import { resolve } from 'path';

const bodyParser = KoaBody();

const staticFilePath = resolve(__dirname, '../../web/dist');
const staticFiles = KoaStatics(staticFilePath);

const app = new Koa();

app.use(staticFiles);
app.use(logger);
app.use(catcher);
app.use(bodyParser);
app.use(Koa2Cors({ origin: '*' }));
app.use(database);

app.use(userConrtoller.prefix('/user').routes());

app.use(async ctx => {
  ctx.status = 404;
  ctx.body = `path not found: ${ctx.url}`;

  throw new Error('path not found');
});

app.addListener('error', console.log);

app.listen(NodeConfig.server.port, NodeConfig.server.host, () => {
  console.log('app started.');
});
